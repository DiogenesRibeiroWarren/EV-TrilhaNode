import { CreateUerController } from './CreateUserController';

import { container } from 'tsyringe'
import { CreateUserService } from './CreateUserService';

const createUserController = new CreateUerController(
    container.resolve(CreateUserService)
);

export { createUserController };