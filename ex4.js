let getSumOfMultiples = (factors, multiples) => {
  let sum =0;
  for (let num of multiples){
    if (factors.some(f => num % f === 0)){
      sum = sum + num;
    }
  }
  return sum;
};

let processEulerString = (inputString) => {
  let parts = inputString.split(":");
  let factors = parts[0].trim( ).split(" ").map(Numbeer);
  let multiples = parts[1].trim( ).split(" ").map(Numbeer);
  let resultSum = getSumOfMultiples(factors,multiples);
  let output = resultSum + " : " + parts[0].trim() + " : " + parts[1].trim();
  alert(output);
  return output
};
