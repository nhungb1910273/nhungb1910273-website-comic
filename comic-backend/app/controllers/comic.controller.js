
const ComicService = require("../services/comic.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");


exports.create = async (req, res, next) => {

    if (!req.body?.name) {
        return next(new ApiError(400, "Name can not be empty"));
    }
    try{
        const comicService = new ComicService(MongoDB.client);
        const document = await comicService.create(req.body,req.file);
        return res.send(document);
    }catch (error){
        return next(
            new ApiError(500, "An error occurred while creating the contacts")
        );
    }
};


exports.createContent = async (req, res, next) => {
    
    try{
        const comicService = new ComicService(MongoDB.client);
        const document = await comicService.createContent(req.body,req.files);
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
        const comicService = new ComicService(MongoDB.client);
        const { name } = req.query;
        if(name){
            documents = await comicService.findByName(name);
        }else{
            documents = await comicService.find({});
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
        
        const comicService = new ComicService(MongoDB.client);
        const document = await comicService.findById(req.params.id);
        console.log(req.params.id)
        console.log(document);
        if(!document){
            return next(new ApiError(404, "Comic not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving comic with id=${req.params.id}`
            )
        );
        
    }
}

exports.findContents = async (req,res,next)=>{
    try {
        const comicService = new ComicService(MongoDB.client);
        const document = await comicService.findContentByIdComic(req.params.id);
        if(!document){
            return next(new ApiError(404, "Comic not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving comic with id=${req.params.id}`
            )
        );
        
    }
}
exports.findOneContentById = async (req,res,next)=>{
    try {
        const comicService = new ComicService(MongoDB.client);
        const document = await comicService.findContentById(req.params.id);
        if(!document){
            return next(new ApiError(404, "Comic not found"));
        }
        console.log(document);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving comic with id=${req.params.id}`
            )
        );
        
    }
}
exports.findOneComicByGenre = async (req,res,next)=>{
    try {
        const comicService = new ComicService(MongoDB.client);
        const document = await comicService.findComicByGenre(req.params.id);
        if(!document){
            return next(new ApiError(404, "Comic not found"));
        }
        console.log(document);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving comic with id=${req.params.id}`
            )
        );
        
    }
}
exports.update=async(req,res,next)=>{
    if(Object.keys(req.body).length === 0){
        return next(new ApiError(400, "Data to update can not be empty"));
    }
    try {
        const comicService = new ComicService(MongoDB.client);
        const document = await comicService.update(req.params.id, req.body);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500, `Error updating genre with id=${req.params.id}`)
        );
    }
};

exports.delete = async(req,res,next)=>{
    try {
        const comicService = new ComicService(MongoDB.client);
        const document= await comicService.delete(req.params.id);
        
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
        const comicService = new ComicService(MongoDB.client);
        const deletedCount = await comicService.deleteAll;
        return res.send({
            message: `${deletedCount} contacts were deleted successfully` 
        });
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contacts")
        );
    }
};

