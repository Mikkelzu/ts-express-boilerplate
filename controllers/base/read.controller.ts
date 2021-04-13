import { Router, Request, Response, } from 'express'
import HttpClient from '../../http/http'
import IReadService from './services/read.interface'
import ReadService from './services/read.service'

export default class ReadController extends HttpClient implements IReadService {

    public path: any = '/'
    public router: Router = Router()
    public readService: ReadService = new ReadService()

    public isLoading: boolean = true;
    public data: any
    constructor(path: any) {
        super('https://type.fit/api/')

        if (path != null) {
            this.path = path
        }

        this.getData()
            .then((d)=> {
                // this.isLoading = true
                this.data = d
            })
            .finally(() => {
                this.isLoading = false
            })
    }

    getData() {
        return this.httpClient.get<any>('quotes')
    }

}