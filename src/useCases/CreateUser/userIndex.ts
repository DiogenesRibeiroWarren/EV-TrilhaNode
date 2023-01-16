import { CreateUserController } from './CreateUserController';

import { container } from 'tsyringe'
import { CreateUserService } from './CreateUserService';

const createUserController = new CreateUserController(
    container.resolve(CreateUserService)
);

export { createUserController };