
const CommentService = require("../services/comment.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.create = async (req, res, next) => {
    if (!req.body?.comment) {
        return next(new ApiError(400, "Comment can not be empty"));
    }
    try{
        const commentService = new CommentService(MongoDB.client);
        const document = await commentService.addComment(req.body);
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
        const commentService = new CommentService(MongoDB.client);
        const { idUser } = req.query;
        if(idUser){
            documents = await commentService.findByIdUser(idUser);
        }else{
            documents = await commentService.find({});
        }
        console.log(documents);
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while retrieving contacts")
        );
    }
    return res.send(documents);
}

exports.findOne = async (req,res,next)=>{
    try {
        const commentService = new CommentService(MongoDB.client);
        const document = await commentService.findById(req.params.id);
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
        const commentService = new CommentService(MongoDB.client);
        const document = await commentService.update(req.params.id, req.body);
        if(!document){
            return next(new ApiError(404, "Contact not found"));
        }   
        return res.send({ message: "Contact was updated successfully"});
    } catch (error) {
        return next(
            new ApiError(500, `Error updating contact with id=${req.params.id}`)
        );
    }
};

exports.delete = async(req,res,next)=>{
    try {
        const commentService = new CommentService(MongoDB.client);
        const document= await commentService.delete(req.params.id);
        if(!document){
            return next(new ApiError(404,"Contact not found"));
        }
        return res.send({message: "Contact was deleted successfully"});
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete contact with id=${req.params.id}`
            )
        );
    }
};

exports.findAllFavorite = async(_req,res,next)=>{
    try{
        const commentService = new CommentService(MongoDB.client);
        const documents = await commentService.findFavorite();
        return res.send(documents);
    }catch (error){
        return next(
            new ApiError(500, "An error occurred while creating the contacts")
        );
    }
};

exports.deleteAll = async(_req,res,next)=>{
    try {
        const commentService = new CommentService(MongoDB.client);
        const deletedCount = await commentService.deleteAll;
        return res.send({
            message: `${deletedCount} contacts were deleted successfully` 
        });
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contacts")
        );
    }
};

