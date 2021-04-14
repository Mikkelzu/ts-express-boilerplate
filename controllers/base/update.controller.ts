import { Router } from 'express'
import { idText } from 'typescript'
import HttpClient from '../../http/http'
import IUpdateService from './services/update.interface'

export default class UpdateController extends HttpClient implements IUpdateService {

    public path: any = '/'
    public router: Router = Router()

    public data: any
    constructor(path: any) {
        super(`${process.env.API_URL}`)

        if (path != null) {
            this.path = path
        }
    }

    updateOneById(id: number) {
        return id
    }

    updateMany(items: Array<any>) {
        return items
    }


}