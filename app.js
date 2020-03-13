let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let db = "";
// Express Route
const kritikRoute = require('./api/student.route');
const creatorRoute = require('./api/creator.route');
const contentRoute = require('./api/content.route');


// Connecting mongoDB Database
mongoose.connect(db, {
  // useUnifiedTopology: true,
  useNewUrlParser: true
  })
.then(() => {
  console.log('Database sucessfully connected!')
})
.catch(error => {
  console.log('Could not connect to database : ' + error)
});



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/kritik', studentRoute)
app.use('/creator', creatorRoute)
app.use('/content', contenRoute)


// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((error) => {
    if (error) throw error;
    console.log(error);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});