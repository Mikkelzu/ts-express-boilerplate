import { Router } from 'express'
import HttpClient from '../../http/http'
import IDeleteService from './services/delete.interface'

export default class DeleteController extends HttpClient implements IDeleteService{

    public path: any = '/'
    public router: Router = Router()

    public data: any
    constructor(path: any) {
        super(`${process.env.API_URL}`)

        if (path != null) {
            this.path = path
        }
    }

    deleteOneById(id: number) {
        return id;
    }

    deleteMany(items: Array<any>) {
        return items;
    }

}