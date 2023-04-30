const bcrypt = require('bcryptjs');
const { ObjectId } = require("mongodb");
const salt = bcrypt.genSaltSync(10);

class UserService {

    constructor(client) {
        this.User = client.db().collection("users");
        console.log(this.User);
    }
    extractUserData(payload) {
        var hashPassword =  bcrypt.hashSync(payload.password, salt);
        const user = {
            name: payload.name,
            email: payload.email,
            password: hashPassword
        };
        // Remove undefined fields
        Object.keys(user).forEach(
            (key) => user[key] === undefined && delete user[key]
        );
        return user;
    }
    async createUser(payload) {
        const user = this.extractUserData(payload);
        var findEmail =  await this.User.findOne({
            email: payload.email
        });
        if(!findEmail){
            if(payload.password !== payload.confirmPassword){
               return {
                    errCode:2,
                    message: 'Password and Confirm Password do not match!'
                };
            }else{
                await this.User.findOneAndUpdate(
                    user,
                    { $set: { user: user } },
                    { returnDocument: "after", upsert: true }
                );
                return {
                    errCode:0,
                    message:"User registered successfully!"
                };
            }
            
        }else{
            return {
                errCode: 1,
                message:"Your email is already in used, Please try another email!"
            };
        }
    }

    async login(payload){
        var findUser =  await this.User.findOne({
            email: payload.email,
        });
        if(findUser){
            let check = bcrypt.compareSync(payload.password, findUser.password);
            if(check){
                return {
                    errCode: 0,
                    message:"User login successfully!"
                };
            }else{
                return {
                    errCode: 2,
                    message:"Wrong password!"
                };
            }
        }else{
            return {
                errCode: 1,
                message:"Wrong email!"
            };
        }
    }
    async find(filter){
        console.log(filter);
        const cursor = await this.User.find(filter);
        if(cursor){
            return {
                errCode: 0,
                users: await cursor.toArray()
            };
        }else{
            return {
                errCode: 1,
                message:"User's not found!"
            };
        }
    }

    

    async findById(id) {
        return await this.User.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractUserData(payload);
        const result = await this.User.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async delete(id) {
        const result = await this.User.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll() {
        const result = await this.User.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = UserService;