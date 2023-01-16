import { Request, Response } from 'express';

import { User } from '../../entities/User';
import { CreateUserService } from './CreateUserService';

export class CreateUserController {
    constructor(
        private createUserService: CreateUserService
    ) { }

    handle(req: Request, res: Response) {

        const userData: User = req.body;

        try {
            this.createUserService.execute(userData)
            return res
        } catch (e: any) {
            res.status(500).send('Unexpected Error')
            console.log(e)
        }
    }
}