class HtmlClient {
    get(url,params){
        return fetch(url,params)
    }
}

export const htmlClient = new HtmlClient();