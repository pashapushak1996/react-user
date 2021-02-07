export class UserService {
    constructor(htmlClient) {
        this.htmlClient = htmlClient;
        this.baseURL = `https://jsonplaceholder.typicode.com/users`
    }

    async getUsers() {
        return await this.htmlClient.get(`${this.baseURL}`)
    }

    async getUser(userId) {
        return await this.htmlClient.get(`${this.baseURL}/${userId}`)
    }

}

