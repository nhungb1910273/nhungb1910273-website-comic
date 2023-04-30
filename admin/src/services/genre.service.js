import createApiClient from "./api.service.appjson";
class GenreService {
    constructor(baseUrl = "/api/genres") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/getAll")).data;
    }
    async create(data) {
        console.log("data:",data);
        return (await this.api.post("/create", data)).data;
        
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        return (await this.api.get(`get/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`update/${id}`,data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`delete/${id}`)).data;
    }
}
export default new GenreService();
