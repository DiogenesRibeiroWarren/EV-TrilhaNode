import { Request, Response } from 'express'

import { UserMock } from '../../domain/user/mocks/User'

export class ListUser{

    list(req: Request, res: Response){

        try{

            res.status(201).send(UserMock)

        }catch(e: any){

            return res.status(500).send('Unxpected error')

        }

    }

}