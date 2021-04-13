import { Router, Response, Request } from 'express'
import BaseController from './base/base.controller'
import ReadController from './base/read.controller'

export default class HomeController extends ReadController {

    public data: any;
    constructor() {
        super('/')

        this.initRoutes()
    }

    private initRoutes(): void {
        this.router.get(this.path, this.Index)
        this.router.get(this.path + 'about', this.About)
    }

    private Index = (req: Request, res: Response) => {
        res.render('Home/index', { loading: this.isLoading, data: this.data})
    }

    private About = (req: Request, res: Response) => {
        res.render('Home/about')
    }
    
}