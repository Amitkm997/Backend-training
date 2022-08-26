const validation= function(req,res,next){
    let valid=req.headers.isfreeappuser
    console.log(valid);
    if(!valid){
        res.send({status:false,msg:"please provide isFreeAppUser header"})
    }else{
        next();
    }
}
module.exports.validation=validation
