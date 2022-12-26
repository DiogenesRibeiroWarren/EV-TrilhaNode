import { object, string, date, number, boolean, ref } from "yup";

const userSchema = object().shape({

    fullName: string().required(),
    email: string().email().required(),
    emailConfirmation: string()
        .email()
        .required()
        .oneOf([ref('email'), null], 'The emails do not match'),
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

export { userSchema }