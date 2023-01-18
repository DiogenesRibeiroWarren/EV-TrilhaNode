import { Request, Response } from 'express';

import { User } from '../../entities/User';
import { CreateUserService } from './CreateUserService';

export class CreateUserController {
    constructor(
        private createUserService: CreateUserService
    ) { }

    async handle(req: Request, res: Response) {

        const userData: User = await req.body;

        try {
            this.createUserService.execute(userData)
            res.json(userData)

            return res
        } catch (e: any) {
            res.status(500).send('Unexpected Error')
            console.log(e)
        }
    }
}