import { ICreateUserDTO } from './CreateUserDTO'
import { UserMock } from '../../domain/user/mocks/User'

export class CreateUserUseCase {

    create(data: ICreateUserDTO) {

        if (data.email != data.emailConfirmation)
            throw new Error('The emails do not match')

        UserMock.push(data)
    }

}