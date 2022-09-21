const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://manjur:P87CaaikqwE1l5sn@cluster0.cyz76as.mongodb.net/heymoney-app",
    { useNewUrlParser: true, useUnifiedTopology: true }
)

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected', () => console.log('Mongo DB Connection Successfull'))