export interface ICreateUserDTO{

    fullName: string,
    email: string,
    emailConfirmation: string,
    cpf: string,
    cellphone: string,
    birthdate: Date,
    emailSms: boolean,
    whatsapp: boolean,
    country: string,
    city: string,
    postalCode: string,
    address: string,
    number: number 

}