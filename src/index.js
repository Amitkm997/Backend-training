const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const { ConnectionCheckedOutEvent } = require('mongodb');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Daniel997:0C3UNDypy94fmHDP@cluster0.zyocpul.mongodb.net/Amit-plutonium", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );

  //assignment 
  const assignmentMiddleware=function(req,res,next){
    //to print timeStamps
    const current=new Date();
    var dateTime=current.getDate()+' '
                 +current.getMonth()+' '
                 +current.getFullYear()+' '
                 +current.getHours()+' '
                 +current.getMinutes()+' '
                 +current.getSeconds()+' '
    var getIp=req.ip;
    var getUrl=req.originalUrl;

    console.log(`${dateTime}  ${getIp}  ${getUrl}`)
    next();
  }
  app.use(assignmentMiddleware)

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
