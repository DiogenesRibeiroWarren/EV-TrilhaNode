import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";

@injectable()
export class CreateUserService {

    constructor(
        @inject("CreateUserRepository")
        private createUserImplementation: ICreateUserRepository
    ) { }

    execute(userData: User) {
        this.createUserImplementation.save(userData)
        return userData
    }

}