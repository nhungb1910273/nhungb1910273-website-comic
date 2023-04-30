const { ObjectId } = require("mongodb");

class GenreService {
    
    constructor(client) {
        this.Genre = client.db().collection("genres");
    }
    
    extractGenreData(payload) {
        const genre = {
            name: payload.name,
            description: payload.description,
        };
        
        // Remove undefined fields
        Object.keys(genre).forEach(
            (key) => genre[key] === undefined && delete genre[key]
        );
        return genre;
    }

    async create(payload) {
        const genre = this.extractGenreData(payload);
        const findName = await this.Genre.findOne({
            name: payload.name
        })
        if(!findName){
            const result = await this.Genre.findOneAndUpdate(
                genre,
                { $set: { createdAt: new Date() } },
                { returnDocument: "after", upsert: true }
            );
            if(result){
                return {
                    errCode: 0,
                    message: "Genre was added successfully"
                }
            }
           
        }else{
            return {
                errCode: 1,
                message: "Your genre is already in used, Please try another genre!"
            }
        }
        
        return result.value;
    }
    
    async find(filter){
        const cursor = await this.Genre.find(filter);
        if(cursor){
            return {
                errCode: 0,
                genres: await cursor.toArray()
            };
        }else{
            return {
                errCode: 1,
                message:"Genre's not found!"
            };
        }
    }

    async findByName(name){
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i"},
        });
    }

    async findById(id) {
        return await this.Genre.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        console.log(filter);
        const update = this.extractGenreData(payload);
        const result = await this.Genre.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        if(result){
            return {
                errCode: 0,
                message: 'Genre was updated successfully'
            }
        }else{
            return {
                errCode: 1,
                message: 'Genre not found!'
            }
        }
    }

    async delete(id) {
        const result = await this.Genre.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        if(result.value){
            return{
                errCode:0,
                message:"Genre was deleted successfully"
            }
        }else{
            return {
                errCode:1,
                message:"Genre not found"
            }
        }
    }

    async findFavorite() {
        return await this.find({ favorite: true });
    }
    async deleteAll() {
        const result = await this.Genre.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = GenreService;