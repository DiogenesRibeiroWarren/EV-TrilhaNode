import 'reflect-metadata'

import { User } from "../../entities/User";
import { CreateUserRepository } from "../../repositories/implementations/CreateUserRepository";
import { ICreateUserDTO } from './CreateUserDTO';
import { CreateUserService } from "./CreateUserService";

const userData: ICreateUserDTO = {
    fullName: "Diógenes Ribeiro de Oliveira",
    email: "leandro.ribeiro@gmail.com",
    emailConfirmation: "leandro.ribeiro@gmail.com",
    cpf: "872.027.195-65",
    cellphone: "912276462",
    birthdate: "2002-01-19",
    emailSms: false,
    whatsapp: true,
    country: "Brasil",
    city: "POA",
    postalCode: "91450-310",
    address: "Gildo de freitas",
    number: 20
}

const createUserRepository = new CreateUserRepository()
const createUserService = new CreateUserService(createUserRepository)
const userDataInstance = new User(userData)

describe('Create User', () => {

    const user = createUserService.execute(userDataInstance)

    it('Should contain proprietary props', () => {
        expect(user).toHaveProperty('props')
    })

    it('Should be an instance of User', () => {
        expect(user).toBeInstanceOf(User)
    })

    it('Should be of type String', () => {
        expect(typeof user.props.email).toEqual('string')
    })

})