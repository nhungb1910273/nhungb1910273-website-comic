import createApiClient from "./api.service";
class ComicService {
    constructor(baseUrl = "/api/comics") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/getAll")).data;
    }
    async getTrending() {
        return (await this.api.get("/getTrending")).data;
    }
    async get(id) {
        return (await this.api.get(`get/${id}`)).data;
    }

    async getContent(id) {
        return (await this.api.get(`getContent/${id}`)).data;
    }
    async getContentById(id) {
        return (await this.api.get(`getContentById/${id}`)).data;
    }
    async getComicByGenre(id) {
        return (await this.api.get(`getComicByGenre/${id}`)).data;
    }
    async getComicBySchedule(id) {
        return (await this.api.get(`getComicBySchedule/${id}`)).data;
    }

    async findComicByName(search) {
        return (await this.api.get(`findComicByName/${search}`)).data;
    }
}
export default new ComicService();
