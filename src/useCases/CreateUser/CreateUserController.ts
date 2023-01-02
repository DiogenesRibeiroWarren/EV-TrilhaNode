import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

import { ICreateUserRepository } from '../../repositories/ICreateUserRepository';
import { ICreateUserDTO } from './CreateUserDTO';

@injectable()
export class CreateUerController {
    constructor(
        @inject("CreateUserRepository")
        private createUser: ICreateUserRepository
    ) { }

    handle(req: Request, res: Response) {

        const userData: ICreateUserDTO = req.body;

        try {
            this.createUser.save(userData)
            return res.status(201).send('User created');
        } catch (e: any) {
            console.log(e);
        }
    }
}