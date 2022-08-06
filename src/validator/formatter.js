

let trim=function(){
let t="    Function Up     ";
let result =t.trim();
console.log(result);
}

function chagetoLowerCase(){
    let b="Amit Kumar".toLowerCase();
    console.log(b);
    
}

function chagetoUpperCase(){
  let a=  "amitkumar".toUpperCase();
  console.log(a);
}

module.exports.trim=trim;
module.exports.chagetoLowerCase=chagetoLowerCase;
module.exports.chagetoUpperCase=chagetoUpperCase;