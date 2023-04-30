
const GenreService = require("../services/genre.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

// exports.create = (req,res) => {
//     res.send({ message: "create handler user"});
// };

exports.create = async (req, res, next) => {
    console.log(req.body);
    if (!req.body?.name) {
        return next(new ApiError(400, "Name can not be empty"));
    }
    try{
        const genreService = new GenreService(MongoDB.client);
        const document = await genreService.create(req.body);
        return res.send(document);
    }catch (error){
        return next(
            new ApiError(500, "An error occurred while creating the contacts")
        );
    }
};

exports.findAll = async (req,res,next) => {
    let documents = [];
    try {
        const genreService = new GenreService(MongoDB.client);
        const { name } = req.query;
        if(name){
            documents = await genreService.findByName(name);
        }else{
            documents = await genreService.find({});
        }
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while retrieving contacts")
        );
    }
    return res.send(documents);
}

exports.findOne = async (req,res,next)=>{
    try {
        const genreService = new GenreService(MongoDB.client);
        const document = await genreService.findById(req.params.id);
        if(!document){
            return next(new ApiError(404, "Contact not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.id}`
            )
        );
        
    }
}

exports.update=async(req,res,next)=>{
    if(Object.keys(req.body).length === 0){
        return next(new ApiError(400, "Data to update can not be empty"));
    }
    try {
        const genreService = new GenreService(MongoDB.client);
        const document = await genreService.update(req.params.id, req.body);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500, `Error updating genre with id=${req.params.id}`)
        );
    }
};

exports.delete = async(req,res,next)=>{
    try {
        const genreService = new GenreService(MongoDB.client);
        const document= await genreService.delete(req.params.id);
        
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete contact with id=${req.params.id}`
            )
        );
    }
};

exports.deleteAll = async(_req,res,next)=>{
    try {
        const genreService = new GenreService(MongoDB.client);
        const deletedCount = await genreService.deleteAll;
        return res.send({
            message: `${deletedCount} contacts were deleted successfully` 
        });
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contacts")
        );
    }
};

