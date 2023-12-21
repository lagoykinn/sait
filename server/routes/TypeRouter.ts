import Router from 'express'
import TypeService from '../api/services/Type.service'
import TypeController from '../api/controllers/Type.controller'

const router = Router()

router.post('/create_type', TypeController.create)
router.get('/get_types', TypeController.getAll)
router.get('/type', TypeController.getOne)

export default router