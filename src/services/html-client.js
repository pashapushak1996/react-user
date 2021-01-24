class HtmlClient {
    get(url,params){
        return fetch(url,params)
    }
    delete(url,){
        return fetch(url,{
            method:"DELETE"
        })
    }
}

export const htmlClient = new HtmlClient();