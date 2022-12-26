import { ICreateUserDTO } from './CreateUserDTO'
import { UserMock } from '../../domain/user/mocks/User'

export class CreateUserUseCase {

    create(data: ICreateUserDTO) {
        UserMock.push(data)
    }

}