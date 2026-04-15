function calculateResult(){
    let n = document.getElementById("subjects").value;
    let total = 0;
    for(let i=1;i<n;i++){
        let marks = parseFloat(prompt("Enter marks for subject" +i))
        total = total + marks;
    }
    let average = total/n;
    let grade;
    let result;
    if(average>80)
{
     grade="A"
}
    else if(average>70){
        grade="B"
    }
    else if(average>60){
        grade="C"
    }
    else if (average>40){
        grade="D"
    }
     else{
        grade="E"
     }
      let result;
      if(average>40){
        result="passed";
      }
      else{
        result="failed"
      }
}