import { Request, Response } from 'express'
import ReadController from './base/read.controller';

export default class ProfileController extends ReadController {

    constructor() {
        super('/profile')

        this.initRoutes()
    }

    private initRoutes(): void {
        this.router.get(this.path, this.Profile)
        this.router.post(this.path, this.EditProfile)
    }

    private Profile = (req: Request, res: Response) => {

        this.data = this.readService.getSinglebyId(4)

        res.render('Profile/index', {data: this.data})
    }

    private EditProfile = (req: Request, response: Response) => {
        // 
    }
}