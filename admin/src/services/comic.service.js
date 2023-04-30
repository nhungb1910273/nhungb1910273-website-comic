import createApiClient from "./api.service";
class ComicService {
    constructor(baseUrl = "/api/comics") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/getAll")).data;
    }
    async create(data) {
        return (await this.api.post("/create", data)).data;
    }
    async createContent(data) {
        return (await this.api.post("/createContent", data)).data;
    }
    async getContent(id) {
        return (await this.api.get(`getContent/${id}`)).data;
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        console.log(id);
        return (await this.api.get(`get/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`update/${id}`,data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`delete/${id}`)).data;
    }
}
export default new ComicService();
