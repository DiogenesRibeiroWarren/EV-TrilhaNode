import { Request, Response, Router } from 'express';

import { userValidateInstance } from './domain/validations/userValidationIndex';

import { listUserUseCase } from './useCases/ListUsers/indexListUser';
import { createUserController } from './useCases/CreateUser/userIndex';

const router = Router();

router.get('/users', listUserUseCase.list);

router.post('/customer', userValidateInstance.validate, (req: Request, res: Response) => {
    return createUserController.handle(req, res);
});

export default router;