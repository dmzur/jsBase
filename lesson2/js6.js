function sum(a, b){
    return a + b; 
   }
   
   function diff(a, b){
    return a - b; 
   }
   
   function multi(a, b){
    return a * b; 
   }
   
   function divi(a, b){
    return a / b; 
   }

function mathOperation(arg1, arg2, operation){
 
    switch(operation){
      case "sum" : console.log(sum(arg1, arg2));
      break;
      case "diff" : console.log(diff(arg1, arg2));
      break;
      case "multi" : console.log(multi(arg1, arg2));
      break;
      case "divi" : console.log(divi(arg1, arg2));
      break;
      default :  console.log("введите корректные данные");  
    }
  }
  
  mathOperation(2, 2, "sum");
  mathOperation(2, 2, "diff");
  mathOperation(2, 2, "multi");
  mathOperation(2, 2, "divi");
  mathOperation(2, 2, "жижа");