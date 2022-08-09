const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})
   //problem statements
   //problem-1
//    console.log("problem-1")
   router.get('/movies',function(req,res){
       let movie=["Tiger Zinda hai","Tarzan the wonder car","Border"]
       res.send(movie);
   })
   
   //problem-2
   router.get('/movies/:indexNumber',function(req,res){
    let movie=["Tiger Zinda hai","Tarzan the wonder car","Border"]
    let a=req.params.indexNumber-1;
    // for(let i=0;i<movie.length;i++){
    //     if(a==i){
    //         return res.send(movie[i]);
    //     }
    // }
     res.send(movie[a]);

    //problem-3
    if(a>movie.length || a<0){
        res.send("not a valid input")
    }
 })
 //problem-4

 router.get('/films',function(req,res){
       const films=
       [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       res.send(films);
    })
       //problem-5
    router.get('/films/:filmId',function(req,res){
        const films=
        [ {
         id: 1,
         name: "The Shining"
        }, {
         id: 2,
         name: "Incendies"
        }, {
         id: 3,
         name: "Rang de Basanti"
        }, {
         id: 4,
         name: "Finding Nemo"
        }]
        let b=req.params.filmId;
        for(let i=0;i<films.length;i++){
            if(films[i].id==b){
                 return res.send(films[i])
            }
        }
        res.send("The filmid does't exist")


    })



module.exports = router;