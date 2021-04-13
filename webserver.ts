import App from './app'
import HomeController from './controllers/home.controller'
import ProfileController from './controllers/profile.controller'

const app = new App(
    [
        new HomeController(),
        new ProfileController()
    ],
    3000
)

app.listen()