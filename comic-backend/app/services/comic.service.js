const { ObjectId } = require("mongodb");
const { connect } = require("../routes/genre.route");

class ComicService {
    
    constructor(client) {
        this.Comic = client.db().collection("comics");
        this.Content = client.db().collection("contents");
    }
    
    extractComicData(payload,file) {
        const comic = {
            name: payload.name,
            photo: file.filename,
            actor: payload.actor,
            _idGenre: payload.idGenre,
            description: payload.description,
            schedule: payload.schedule,
            trending: payload.trending === 'undefined' ? false : true,
        };
        
        // Remove undefined fields
        Object.keys(comic).forEach(
            (key) => comic[key] === undefined && delete comic[key]
        );
        return comic;
    }
    

    async create(payload,file) {
        const comic = this.extractComicData(payload,file);
        const findComic = await this.Comic.findOne({
            name: payload.name
        })
        if(!findComic){
            const result = await this.Comic.findOneAndUpdate(
                comic,
                { $set: { createAt: new Date()} },
                { returnDocument: "after", upsert: true }
            )
            console.log(result.value);
            if(result.value){
                return{
                    errCode:0,
                }
            }
        }
        else{
            return {
                errCode: 1,
                message: "Your comic is already in used, Please try another comic!"
            }
        }
    }

    async createContent(payload,file) {
        const findComic = await this.Comic.findOne({
            name: payload.name
        })
        if(findComic){
            for(var i=0;i<file.length;i++){ 
                if(file.length > 1){
                    var content = {
                        nameContent: payload.nameContent[i],
                        content: file[i].filename,
                        _idComic:findComic._id
                    }

                }else{
                    var content = {
                        nameContent: payload.nameContent,
                        content: file[i].filename,
                        _idComic:findComic._id
                    }                    
                }
                var result = await this.Content.findOneAndUpdate(
                    content,
                    { $set: { createAt: new Date()} },
                    { returnDocument: "after", upsert: true }
                )
                
            }
            if(result.value){
                return{
                    errCode:0,
                    message:'Comic was added successfully'
                }
            }
        }
        else{
            return {
                errCode: 1,
                message: "Your comic not found!"
            }
        }
    }
    
    async find(filter){
        const cursor = await this.Comic.find(filter);
        if(cursor){
            return {
                errCode: 0,
                comics: await cursor.toArray()
            };
        }else{
            return {
                errCode: 1,
                message:"Comic's not found!"
            };
        }
    }

    async findByName(name){
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i"},
        });
    }

    async findById(id) {
        return await this.Comic.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async findContentByIdComic(id) {
        const content = await this.Content.find({
            _idComic: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        if(content){
            return{
                errCode:0,
                contents: await content.toArray()
            }
        }else{
            return{
                errCode:1,
                contents: '',
            }
        }
    }

    async findComicByGenre(id) {
        console.log(id);
        const comic = await this.Comic.find({
            _idGenre: id,
        });
        if(comic){
            return{
                errCode:0,
                comics: await comic.toArray()
            }
        }else{
            return{
                errCode:1,
                comics: '',
            }
        }
    }

    async findContentById(id) {
        return await this.Content.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        console.log(filter);
        const update = this.extractComicData(payload);
        const result = await this.Comic.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        if(result){
            return {
                errCode: 0,
                message: 'Comic was updated successfully'
            }
        }else{
            return {
                errCode: 1,
                message: 'Comic not found!'
            }
        }
    }

    async delete(id) {
        const result = await this.Comic.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });

        if(result.value){
            // if(findContent){
            //     const resultContent = await this.Content.findOneAndDelete({
            //         _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
            //     });
            //     if(resultContent){
                    return{
                        errCode:0,
                        message:"Comic was deleted successfully"
                    }
            //     }
            // }else{
            //     return{
            //         errCode:2,
            //         message:"Content not found"
            //     }
            // }
        }else{
            return {
                errCode:1,
                message:"Comic not found"
            }
        }
    }

    async findFavorite() {
        return await this.find({ favorite: true });
    }
    async deleteAll() {
        const result = await this.Comic.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = ComicService;