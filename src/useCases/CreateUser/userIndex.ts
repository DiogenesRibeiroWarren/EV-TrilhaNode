import { CreateUerController } from './CreateUserController';

import { container } from 'tsyringe'
import { CreateUserRepository } from '../../repositories/implementations/CreateUserRepository';

const createUserController = new CreateUerController(
    container.resolve(CreateUserRepository)
);

export { createUserController };