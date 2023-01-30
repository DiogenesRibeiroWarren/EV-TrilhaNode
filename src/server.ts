import { dataBaseClienteInstance } from "./infra/mongoDB/indexMongoDBClient";
import { app } from "./main";

const PORT = 8080;

app.listen(PORT, () => {
    dataBaseClienteInstance.connect()
        .then(console.log)
        .catch(console.error)

    console.log(`Server running on port: ${PORT}`)
});