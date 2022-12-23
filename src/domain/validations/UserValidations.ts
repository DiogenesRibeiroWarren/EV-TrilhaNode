import { object, string, number, date, boolean } from 'yup'
import { Request, Response, NextFunction } from 'express'

export class UserValidate {

    async validate(req: Request, res: Response, next: NextFunction) {

        const schema = object().shape({

            fullName: string().required(),
            email: string().email().required(),
            emailConfirmation: string().email().required(),
            cpf: string().required(),
            cellphone: string().required(),
            birthdate: date().required(),
            emailSms: boolean().required(),
            whatsapp: boolean().required(),
            country: string().required(),
            city: string().required(),
            postalCode: string().required(),
            address: string().required(),
            number: number().required()

        })

        if (!await(schema.isValid(req.body))) {

            return res.status(404).json({
                erro: true,
                message: 'Necessário preecher todos os campo do formulário!'
            })

        }

        next()

    }
}