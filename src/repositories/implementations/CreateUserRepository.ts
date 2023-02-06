import { User } from "../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";

import { dataBaseClienteInstance } from "../../infra/mongoDB/indexMongoDBClient";

export class CreateUserRepository implements ICreateUserRepository {

    private getCustomer() {
        return dataBaseClienteInstance.getCollection('customer')
    }

    async save(user: User): Promise<User> {
        this.getCustomer().insertMany([user])
        return user
    }

}