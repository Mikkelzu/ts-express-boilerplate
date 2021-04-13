import { Router } from 'express'
import ReadService from './services/read.service'

export default class ReadController {

    public path: any = '/'
    public router: Router = Router()
    public readService: ReadService = new ReadService()

    public data: any
    constructor(path: any) {

        if (path != null) {
            this.path = path
        }
    }

}