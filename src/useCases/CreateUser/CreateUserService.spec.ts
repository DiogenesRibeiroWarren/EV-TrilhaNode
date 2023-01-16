import 'reflect-metadata'

import { User } from "../../entities/User";
import { CreateUserRepository } from "../../repositories/implementations/CreateUserRepository";
import { userData } from '../../domain/userMocked/userMocked';
import { CreateUserService } from "./CreateUserService";

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