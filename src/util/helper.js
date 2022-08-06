const d_t =new Date;
let printDate=function(){
    let dat = d_t.getDate();
    console.log(dat)
}

let printmonth=function(){
    let x= d_t.getMonth();
    console.log(x)
}





let datt=function(){
    console.log("Plutonium W2D5, The Topic for the today is nodejs module system");
}

module.exports.printDate=printDate;
module.exports.printmontht=printmonth;
module.exports.datt=datt;

