const express = require('express');
const cors = require('cors');
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000
require('dotenv').config()

// Middleware
app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a6fpj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run () {
    try {
        await client.connect()
        console.log("DB Connected");
    } 
    
    finally {

    }

}

run().catch(console.dir)


app.get('/', (req, res) => {
    res.send("Hello Todo App")
})

app.listen(port, () => {
    console.log("Your Server Is Running at", port);
})