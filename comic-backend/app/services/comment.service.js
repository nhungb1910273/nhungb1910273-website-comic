const { ObjectId } = require("mongodb");

class CommentService {

    constructor(client) {
        this.Comment = client.db().collection("comments");
    }
    extractCommentData(payload) {
        const comment = {
            username: payload.username,
            comment: payload.comment,
            isPost: payload.isPost,
            nameComic:payload.nameComic
        };
        // Remove undefined fields
        Object.keys(comment).forEach(
            (key) => comment[key] === undefined && delete comment[key]
        );
        return comment;
    }
    async addComment(payload) {
        console.log(payload);
        const comment = this.extractCommentData(payload);
       
        await this.Comment.findOneAndUpdate(
            comment,
            { $set: { createAt:new Date() } },
            { returnDocument: "after", upsert: true }
        );
        return {
            errCode:0,
            message:"Comment added successfully!"
        };
            
       
    }

    async findByIdUser(id){
       const find = await this.find({
            _idUser: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        if(find){
            return{
                errCode:0,
                comments: await find.toArray()
            }
        }else{
            return{
                errCode:1,
                comments: '',
            }
        }
    } 

    async find(filter){
        console.log(filter);
        const cursor = await this.Comment.find(filter);
        if(cursor){
            return {
                errCode: 0,
                comment: await cursor.toArray()
            };
        }else{
            return {
                errCode: 1,
                message:"comment's not found!"
            };
        }
    }

    

    async findById(id) {
        return await this.Comment.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const result = await this.Comment.findOneAndUpdate(
            filter,
            { $set: {isPost:payload.isPost} },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async delete(id) {
        const result = await this.Comment.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll() {
        const result = await this.Comment.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = CommentService;