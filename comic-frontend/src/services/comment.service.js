import createApiClient from "./api.service";
class CommentService {
    constructor(baseUrl = "/api/comments") {
        this.api = createApiClient(baseUrl);
    }
    // async getAll() {
    //     return (await this.api.get("/")).data;
    // }
    async addComment(data) {
        console.log(data);
        return (await this.api.post("/addComment", data)).data;
    }
   
    // async deleteAll() {
    //     return (await this.api.delete("/")).data;
    // }
    // async get(id) {
    //     return (await this.api.get(`/${id}`)).data;
    // }
    // async update(id, data) {
    //     return (await this.api.put(`/${id}`, data)).data;
    // }
    // async delete(id) {
    //     return (await this.api.delete(`/${id}`)).data;
    // }
}
export default new CommentService();
