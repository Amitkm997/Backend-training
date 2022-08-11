const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

//assignment
// const express = require('express');
// const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post('/players', function (req, res) {

       //LOGIC WILL COME HERE
       let isNameRepeated=false;   
       let newPlayer= req.body;
       for (let i=0;i<players.length;i++){
        if(players[i].name==newPlayer.name){
             isNameRepeated=true
             break;
        }
        }
        //we will be taking the input from the postman e.g. req.body
        //
        if(isNameRepeated){
             res.send("Your name already exit so you are not allowed to enter your details");
        }else
        {
        players.push(newPlayer)
            res.send(  { data: players , status: true }  )
    }
   })

   router.get('/guery-params',function(req,res){
    let arr=[1,2,3,22,344,5667,3,32,233,45,]
    input=req.query.input;
    let newArray=arr.filter(a =>a>input);
    res.send({data:newArray,status:true})
   })
   //voting problems
   
// let result=



router.post('/Voting',function(req,res){
    let person=[
        {
            name:"Amit kumar",
            age:10,
            votingStatus:false
        },
        {
            name:"Sumit pal",
            age:20,
            votingStatus:false
        },
        {
            name:"Avneesh pal",
            age:70,
            votingStatus:false
        },
        {
            name:"Aryan Yadav",
            age:5,
            votingStatus:false
        },
        {
            name:"Nidhi singhs",
            age:40,
            votingStatus:false
        }]
    inputAge=req.query.votingAge;
    person.map(per => (per.age>inputAge)?per.votingStatus=true:per.votingStatus);
    // for(let i=0;i<person.length;i++){
    // if(person[i].age>inputAge){
    //     person[i].votingStatus=true;
    // }
    //   }
    let final=person.filter(pson=>{if(pson.votingStatus==true) {return pson.name}});
    res.send({data:final});
 
})
module.exports = router;
