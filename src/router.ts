import { Request, Response, Router } from 'express';

import { userValidateInstance } from './domain/validations/userValidationIndex';
import { createUserController } from './useCases/CreateUser/userIndex';
import { docsController } from './infra/docsIndex';

const router = Router();

router.use('/docs', docsController.initDocs)
router.get('/docs', docsController.makeDocs)

router.post('/customer', userValidateInstance.validate, (req: Request, res: Response) => {
    return createUserController.handle(req, res);
});

export default router;