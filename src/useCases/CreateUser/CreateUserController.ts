import { Request, Response } from 'express';

import { User } from '../../entities/User';
import { CreateUserService } from './CreateUserService';

export class CreateUerController {
    constructor(
        private createUserService: CreateUserService
    ) { }

    handle(req: Request, res: Response) {

        const userData: User = req.body;

        try {
            this.createUserService.execute(userData)
            return res
        } catch (e: any) {
            console.log(e);
        }
    }
}