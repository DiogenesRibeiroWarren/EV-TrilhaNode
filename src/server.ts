import { dataBaseClienteInstance } from "./infra/mongoDB/indexMongoDBClient";
import { app } from "./main";

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    await dataBaseClienteInstance.connect()
        .then(console.log)
        .catch(() => dataBaseClienteInstance.close())

    console.log(`Server running on port: ${PORT}`)
});