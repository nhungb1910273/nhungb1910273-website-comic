const { ObjectId } = require("mongodb");
const { connect } = require("../routes/genre.route");

class ComicService {
    
    constructor(client) {
        this.Comic = client.db().collection("comics");
        this.Content = client.db().collection("contents");
    }
    
    extractComicData(payload,file) {
        if(file === undefined){
            var photo = payload.photo;
        }else{
            var photo = file.filename;
        }
        const comic = {
            name: payload.name,
            photo: photo,
            actor: payload.actor,
            _idGenre: payload._idGenre,
            description: payload.description,
            schedule: payload.schedule,
            trending: payload.trending,
            
        };
        console.log(comic);
        
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
    async findComicBySchedule(id) {
        const comic = await this.Comic.find({
            schedule: id,
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

    

    async update(id, payload,file) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractComicData(payload,file)
        const result = await this.Comic.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        
        if(result.value){
            return {
                errCode: 0,
            }
        }else{
            return {
                errCode: 1,
                message: 'Comic not found!'
            }
        }
    }

    async updateContent(id, payload,file) {
        const filter = {
            _idComic: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };  
        if(Array.isArray(file) && file.length){
            console.log('FILE');
            for(var i=0;i<file.length;i++){ 
                console.log(payload.nameContent.length-file.length);
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
                    filter,
                    { $set: content },
                    { returnDocument: "after", upsert: true }
                )
                if(result.value){
                    return {
                        errCode: 0,
                        message:'Comic was updated successfully'
                    }
                }else{
                    return {
                        errCode: 1,
                        message: 'Comic not found!'
                    }
                }
            }
        }else{
            console.log('UNDEFINE');
            var content = {
                nameContent: payload.nameContent,
                content: payload.content,
            }
            var result = await this.Content.findOneAndUpdate(
                filter,
                { $set: content },
                { returnDocument: "after", upsert: true }
            )
            
            if(result.value){
                return {
                    errCode: 0,
                    message:'Comic was updated successfully'
                }
            }else{
                return {
                    errCode: 1,
                    message: 'Comic not found!'
                }
            }
            
        }
        // const result = await this.Content.findOneAndUpdate(
        //     filter,
        //     { $set: update },
        //     { returnDocument: "after" }
        // );
        
        // if(result.value){
        //     return {
        //         errCode: 0,
        //     }
        // }else{
        //     return {
        //         errCode: 1,
        //         message: 'Comic not found!'
        //     }
        // }
    }

    async delete(id) {
        const result = await this.Comic.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        const resultContent = await this.Content.deleteMany({
            _idComic: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        if(result.value && resultContent.deletedCount){
            return{
                errCode:0,
                message:"Comic was deleted successfully"
            }
        }else{
            return {
                errCode:1,
                message:"Comic not found"
            }
        }
    }
    async deleteContent(id) {
        const result = await this.Content.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        
        if(result.value){
            return{
                errCode:0,
                message:"Chapter was deleted successfully"
            }
        }else{
            return {
                errCode:1,
                message:"Chapter not found"
            }
        }
    }

    async findTrending() {
        return await this.find({ trending: 'true' });
    }
    async deleteAll() {
        const result = await this.Comic.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = ComicService;