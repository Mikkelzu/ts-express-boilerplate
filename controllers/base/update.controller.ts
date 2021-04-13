import { Router } from 'express'
import UpdateService from './services/update.service'

export default class DeleteController {

    public path: any = '/'
    public router: Router = Router()
    public createService: UpdateService = new UpdateService()

    public data: any
    constructor(path: any) {

        if (path != null) {
            this.path = path
        }
    }

}