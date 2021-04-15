import { Request, Response, Router } from 'express'
import IBaseService from './services/base.interface'

export default class BaseController {
    public path: any = '/'
    public router: Router = Router()
    constructor(path: any) {
        if (path != null) {
            this.path = path
        }
    }
}