import createApiClient from "./api.service";
class GenreService {
    constructor(baseUrl = "/api/genres") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/getAll")).data;
    }
    async get(id) {
        return (await this.api.get(`get/${id}`)).data;
    }

}
export default new GenreService();
