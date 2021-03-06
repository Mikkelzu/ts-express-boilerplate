import express from 'express'
import path from 'path'

export default class App {
    public app: express.Application
    public port: number

    constructor(controllers: any, port: number) {
        this.app = express()
        this.port = port

        this.initViewEngine()
        this.initMiddlewares()
        this.initControllers(controllers)

        /**
         * Create a basic 404 router
         */
        this.app.get('*', (req, res) => {
            res.render('Base/404PageNotFound')
        })
    }

    private initViewEngine(): void {
        this.app.set('view engine', 'ejs')
        this.app.set('views', path.join(__dirname, 'views'))
        this.app.use(express.static(path.join(__dirname, 'public')))
    }
    private initControllers(controllers: any): void {  
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router)
        })
    }

    // we arent using middlewares yet. think bodyparser, session, cookieparser etc here
    private initMiddlewares(): void {
        // throw new Error('Method not implemented.')
    }

    public listen() : void {
        this.app.listen(this.port, () => {
            console.log(`Application listening on port ${this.port}`)
            
        })
    }
}