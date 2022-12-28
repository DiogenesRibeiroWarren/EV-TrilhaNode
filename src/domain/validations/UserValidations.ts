import { Request, Response, NextFunction } from 'express';

import { userSchema } from '../userSchema/userSchema';

export class UserValidate {

    async validate(req: Request, res: Response, next: NextFunction) {

        if (!await (userSchema.isValid(req.body))) {

            return res.status(404).json({
                erro: true,
                message: 'Necessário preecher todos os campo do formulário!'
            });

        }

        next();

    }
}