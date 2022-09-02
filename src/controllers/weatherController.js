const axios=require("axios")

let getWeather= async function(req,res){
   try {
    let cityList= [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let newArray=[];
    for(let i=0;i<cityList.length;i++){
        let obj={city:cityList[i]}
        // let city=req.query.city
        let appid=req.query.appId
        // console.log(cityList)
    let options={
        method:'get',
        url:`http://api.openweathermap.org/data/2.5/weather?q=${cityList[i]}&appid=${appid}`
    } 
    let result=await axios (options)
    obj.temp=result.data.main.temp    
    newArray.push(obj);
 }
    let sorted =newArray.sort((a,b)=>a.temp-b.temp)
    console.log(sorted);
    res.status(200).send({status:true,data:sorted});
}catch(err){
    console.log(err.message)
    res.status(500).send({data:err.message});
}
}


module.exports.getWeather=getWeather