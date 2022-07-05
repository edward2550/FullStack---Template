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
//middleware (
app.set('view engine', 'ejs')//adding ejs to our to machine
app.use(express.static('public'))//setting some external files , serve up all the files from the public folder
app.use(express.urlencoded({extended:true}))//helps us halnded url 
app.use(express.json())
app.use(cors())
//middleware )

app.get('/',async (req, res) => {
    try{
        res.render('index.ejs')
    } catch(error) {
        res.status(500).send({message: error.message})
    }
})


//connect it to the port (this is using express)
app.listen(process.env.PORT || PORT, () => {
    console.log(`sever is running on port `)
})