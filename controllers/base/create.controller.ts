import { Router } from 'express'
import HttpClient from '../../http/http'
import ICreateService from './services/create.interface'
export default class CreateController extends HttpClient implements ICreateService {

    public path: any = '/'
    public router: Router = Router()

    public data: any
    constructor(path: any) {

        super(`${process.env.API_URL}`)

        if (path != null) {
            this.path = path
        }
    }

    createOne(item: any) {
        return item
    }

    createMany(items: Array<any>) {
        return items
    }

}