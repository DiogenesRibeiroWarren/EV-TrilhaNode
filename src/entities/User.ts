export class User {

    public fullName: string;
    public email: string;
    public emailConfirmation: string;
    public cpf: string;
    public cellphone: string;
    public birthdate: Date;
    public emailSms: boolean;
    public whatsapp: boolean;
    public country: string;
    public city: string;
    public postalCode: string;
    public address: string;
    public number: number;

    constructor(
        fullName: string, email: string, emailConfirmation: string,
        cpf: string, cellphone: string, birthdate: Date, emailSms: boolean,
        whatsapp: boolean, country: string, city: string, postalCode: string,
        address: string, number: number
    ) {
        this.fullName = fullName,
            this.email = email,
            this.emailConfirmation = emailConfirmation,
            this.cpf = cpf,
            this.cellphone = cellphone,
            this.birthdate = birthdate,
            this.emailSms = emailSms,
            this.whatsapp = whatsapp,
            this.country = country,
            this.city = city,
            this.postalCode = postalCode,
            this.address = address,
            this.number = number
    }

}