import HttpClient from "../../../http/http"

export default class ReadService extends HttpClient {
    constructor() {
        super('https://type.fit/api/')
    }

    public getSinglebyId(id: number): any {
        return id
    }

    public getAll(): Promise<any> {
        return this.httpClient.get<any>('quotes')
    }

}