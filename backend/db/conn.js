const mongoose = require("mongoose")

async function main() {
    try {

        mongoose.set("strictQuery", true)

        await mongoose.connect(
            "mongodb+srv://matheus_soares:<password>@cluster0.dozzqov.mongodb.net/test"
        );

        console.log("Conectado ao banco!")
    }catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;