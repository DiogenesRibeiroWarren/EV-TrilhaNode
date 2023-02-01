import { dataBaseClienteInstance } from "./infra/mongoDB/indexMongoDBClient";
import { app } from "./main";

import dotenv from 'dotenv'

dotenv.config({
    path: __dirname + '/.env'
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    dataBaseClienteInstance.connect()
        .then(console.log)
        .catch(() => dataBaseClienteInstance.close())

    console.log(`Server running on port: ${PORT}`)

});