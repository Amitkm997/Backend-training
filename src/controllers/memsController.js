const axios =require("axios");
// const { text } = require("express");


let memsController1=async function(req,res){
    let template_id=req.query.template_id
    let text0=req.query.text0
    let text1=req.query.text1

    let options={
        method:'post',
        url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123&`
        // data:template_id
    }
    let result =await axios (options);
    res.status(200).send({status:true,msg:result.data});
}

module.exports.memsController1=memsController1;
