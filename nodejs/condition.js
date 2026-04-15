/*conditionals in JS:if,else if,else*/

const { json } = require("node:stream/consumers");

/*let temperature=25;
if(temperature>30){
    console.log("Its hot!");
}
else if(temperature>20){
    console.log("its warm");
}
else{
    console.log("its cold");
}*/
  //switch case in js//
  let day=3;
  switch(day){
    case 1:
    console.log("monday");
    break;
    case 2:
    console.log("tuesday")
    break;
    case 3:
    console.log("wednesday");
    break;
    case 4:
    console.log("thursday");
    break;
    case 5:
    console.log("friday");
    break;
    case 6:
    console.log("satursday");
    break;
    case 7:
    console.log("sunday");
    break;
    default:
        console.log("error")
        break;
  }
