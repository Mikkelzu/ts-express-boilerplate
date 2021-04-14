import { Request, Response, Router } from 'express'

export default class BaseController {
    public path: any = '/'
    public router: Router = Router()
    constructor(path: any) {
        if (path != null) {
            this.path = path
        }
    }
}