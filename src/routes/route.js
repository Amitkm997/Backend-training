const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
   
    let firstElement =(['Sabiha','Akash','Pritesh'])
    res.send(firstElement);
    res.send('My first ever api!')
});

router.post('/my-first-GetApi',function(req,res){
    let user=req.body
    res.send(user);
})





module.exports = router;
// adding this comment for no reason