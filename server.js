const express = require('express')
const bodyParser = require('body-parser')
// const dbConfig = require('./config/db.config.js')
// const mongoose = require('mongoose')
const CapioningRoute = require('./routes/captioning.route.js')
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

// mongoose.Promise = global.Promise
// mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Start the server after successfully connecting to MongoDB
//   })
//   .catch((error) => {
//     console.error('Failed to connect to MongoDB', error);
//   });

app.use('/test-app', CapioningRoute);

app.listen(PORT, () => {
    console.log(`Server is listning on port : ${PORT}`)
})

