import { Router, Request, Response } from 'express'
import BaseController from './base/base.controller';

export default class ProfileController extends BaseController {

    constructor() {
        super('/profile')
        this.initRoutes()
    }

    private initRoutes(): void {
        this.router.get(this.path, this.Profile)
    }

    private Profile = (req: Request, res: Response) => {
        res.render('profile')
    }
}