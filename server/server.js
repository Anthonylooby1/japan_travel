const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")

require('./configs/mongoose.configs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

require('./routes/trips.routes')(app)

app.listen(8000, () => console.log("Listening on server 8000!"))