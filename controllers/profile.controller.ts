import { Router, Request, Response } from 'express'

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
    res.render('profile')
})

export const ProfileController: Router = router