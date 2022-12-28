import { CreateUerController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const crateUserUseCase = new CreateUserUseCase();

const createUserController = new CreateUerController(
    crateUserUseCase
);

export { createUserController };