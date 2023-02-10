import { IDatabaseClient } from "../../repositories/IDataBaseClienteRepository";
import { MongoClient, Db } from "mongodb";

import dotenv from 'dotenv'

dotenv.config({ path: __dirname + '../../../.env' })

const dbUri: string = process.env.MONGO_URI as string

export class DataBaseClient implements IDatabaseClient {

    private client: MongoClient = new MongoClient(dbUri)
    private db: Db = this.client.db('User')

    async connect(): Promise<any> {
        await this.client.connect()
        console.log('Connected successfully to server')

        return 'done.'
    }

    async close(): Promise<any> {
        await this.client.close()
    }

    getInstance(): Db {
        return this.db
    }

    getCollection(name: string) {
        return this.db.collection(name)
    }

}