export class UserService {
    constructor(htmlClient) {
        this.htmlClient = htmlClient;
        this.baseURL = `https://jsonplaceholder.typicode.com/users`
    }

    getUsers() {
        return this.htmlClient.get(`${this.baseURL}`)
            .then(res => res.json())
    }

    getUser(userId) {
        return this.htmlClient.get(`${this.baseURL}/${userId}`)
            .then(res => res.json())
    }

}

