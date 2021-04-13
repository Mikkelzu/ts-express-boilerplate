import { Router } from 'express'
import DeleteService from './services/delete.service'

export default class DeleteController {

    public path: any = '/'
    public router: Router = Router()
    public createService: DeleteService = new DeleteService()

    public data: any
    constructor(path: any) {

        if (path != null) {
            this.path = path
        }
    }

}