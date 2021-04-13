import { Router } from 'express'
import CreateService from './services/create.service'

export default class CreateController {

    public path: any = '/'
    public router: Router = Router()
    public createService: CreateService = new CreateService()

    public data: any
    constructor(path: any) {

        if (path != null) {
            this.path = path
        }
    }

}