import createApiClient from "./api.service.appjson";
class CommentService {
    constructor(baseUrl = "/api/comments") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/getComment")).data;
    }
    
    async update(id, data) {
        return (await this.api.put(`update/${id}`,data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`delete/${id}`)).data;
    }
}
export default new CommentService();
