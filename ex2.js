//redefine these - ex1 should output the solution to project Euler Q1
//https://projecteuler.net/problem=1
//ex2 should output the sum of all multiples of a or b less than n

let euler1=()=>
  { 
  let sum =0;
  for (let i=1; i< 1000; i++){
    if(i % 3 === 0 | i % 5 === 0){
      sum = sum + i;
    }
  }
  alert("The sum of multiples of 3 or 5 below 1000 is: " + sum);
  }

let eulerCustom=()=>{
  let a = parseInt(document.getElementById('inputA').value);
  let b = parseInt(document.getElementById('inputB').value);
  let n = parseInt(document.getElementById('inputN').value);

  let sum =0;

  for (let i =1; i <n; i++){
    if (i % a === 0 || i % b === 0){
      sum = sum + 1;
    }
  }
  
  
  alert("The sum of multiples og " + a + " or " + b + " below " + n + " is: " + sum);
}
