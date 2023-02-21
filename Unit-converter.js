let feet = document.getElementById("num1");

let inches=document.getElementById("num2");

feet.addEventListener("input",function(){
    let result = this.value;
    
    let finalresult = result*12;
   
    inches.value = finalresult;
});

inches.addEventListener("input",function(){
    let inchesresult = this.value;
   
    let fResult = inchesresult/12;

    if(!Number.isInteger(fResult)){
        fResult= fResult.toFixed(2);
    };
   
    feet.value = fResult;
});