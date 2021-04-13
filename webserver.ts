import express from 'express'
import path from 'path'

import {WelcomeController, HomeController, ProfileController} from './controllers'

const app: express.Application = express()
const port: number = Number(process.env.PORT) || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use('/', HomeController)
app.use('/welcome', WelcomeController)
app.use('/profile', ProfileController)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
});