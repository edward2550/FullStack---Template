const express = require('express')
const app = express()
const cors = require('cors')
const MongoCLient = require('mongodb').MongoClient
require('dotenv').config()

const PORT = 8000


//declare varibles that i will use to connect the back end 
let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'feeder-league',
    collection = 'feeder'

//connect it to the server mongodb and use the authentication string    
    MongoCLient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to Database`)
        db =  client.db(dbName)
        collection = db.collection('movies')
    })


//connect it to the port (this is using express)
app.listen(process.env.PORT || PORT, () => {
    console.log(`sever is running on port `)
})