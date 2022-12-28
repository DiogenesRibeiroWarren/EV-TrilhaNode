import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';
import { ICreateUserDTO } from './CreateUserDTO';

export class CreateUerController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    handle(req: Request, res: Response) {

        const userData: ICreateUserDTO = req.body;

        try {
            this.createUserUseCase.create(userData);
            return res.status(201).send('User created');
        } catch (e: any) {
            console.log(e);
        }
    }
}