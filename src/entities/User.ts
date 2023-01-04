interface ICreateUserProps {

    fullName: string
    email: string
    emailConfirmation: string
    cpf: string
    cellphone: string
    birthdate: string
    emailSms: boolean
    whatsapp: boolean
    country: string
    city: string
    postalCode: string
    address: string
    number: number

}

export class User {

    public props: ICreateUserProps

    constructor(props: ICreateUserProps) {
        this.props = props
    }

}