import { User } from "../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";

import { dataBaseClienteInstance } from "../../infra/mongoDB/indexMongoDBClient";

export class CreateUserRepository implements ICreateUserRepository {

    async save(user: User): Promise<User> {
        const collection = dataBaseClienteInstance.getCollection('customer')
        await collection.insertMany([user])

        return user
    }

}