import { Router, Response, Request } from 'express'
import BaseController from './base/base.controller'

// const router: Router = Router()

// router.get('/', (req: Request, res: Response) => {
//     res.render('index')
// })

// export const HomeController : Router = router

export default class HomeController extends BaseController {

    constructor() {
        super('/')

        this.initRoutes()
    }

    private initRoutes(): void {
        this.router.get(this.path, this.Index)
    }

    private Index = (req: Request, res: Response) => {
        res.render('index')
    }
    
}