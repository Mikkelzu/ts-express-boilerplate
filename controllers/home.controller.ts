import { Router, Response, Request } from 'express'
import BaseController from './base/base.controller'
import ReadController from './base/read.controller'

import Database from '../database/database'

export default class HomeController extends ReadController {

    // private _DB = new Database()
    public data: any;
    constructor() {
        super('/')

        this.initRoutes()

        // this._DB.createConnectionToDatabase()
    }

    private initRoutes(): void {
        this.router.get(this.path, this.Index)
        this.router.get(this.path + 'about', this.About)
    }

    private Index = (req: Request, res: Response) => {
        // this._DB.connect((err: any) => {
        //     if (err) {
        //         console.log('Error connection to db')
        //         return;
        //     }
        //     console.log('Connected to db');
            
            
        // })

        // this._DB.connection.query('SELECT * FROM test', (err: any, result: any) => {
        //     console.log(result);
           
        // })

        res.render('Home/index', { loading: this.isLoading, data: this.data})
        // this._DB.disconnect(() => {
        //     console.log('Disconnected from database.');
            
        // })
    }

    private About = (req: Request, res: Response) => {
        res.render('Home/about')
    }
    
}