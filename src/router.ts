import { Request, Response, Router } from 'express'

import { userValidateInstance } from './domain/validations/userValidationIndex'

import { listUserUseCase } from './useCases/ListUsers/indexListUser'
import { createUserController } from './useCases/CreateUser/userIndex'

const router = Router()

export default router
    .get('/users', listUserUseCase.list)
    .post('/customer', userValidateInstance.validate, (req: Request, res: Response) => {
        return  createUserController.handle(req, res)
    })