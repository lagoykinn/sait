import Router from 'express'
import ModelRouter from './ModelRouter'
import TypeBrandRouter from './TypeBrandRouter'
import UserRouter from './UserRouter'
import TypeRouter from './TypeRouter'
import ShoesRouter from './ShoesRouter'
import SeasonRouter from './SeasonRouter'
import SizeRouter from './SizeRouter'
import ActivateController from '../api/controllers/Activate.controller'
import BrandRouter from './BrandRouter'
import ShoesController from '../api/controllers/Shoes.controller'

const router = Router()

router.use('/model', ModelRouter)
router.use('/users', UserRouter)
router.use('/shoes', ShoesRouter)
router.use('/type', TypeRouter)
router.use('/brand', BrandRouter)
router.use('/size', SizeRouter)
router.use('/season', SeasonRouter)
router.use('/type_brand', TypeBrandRouter)

router.post('/shoes', ShoesController.createNew)

router.get('/activate/:link', ActivateController.activate)

export {
    router
}