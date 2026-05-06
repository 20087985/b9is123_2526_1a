let euler1 = () => {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
       
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    alert("The sum of multiples of 3 or 5 below 1000 is: " + sum);
}


let eulerCustom = () => {
  
    let valA = parseInt(document.getElementById('a').value);
    let valB = parseInt(document.getElementById('b').value);
    let valN = parseInt(document.getElementById('n').value);

    let sum = 0;

   
    if (isNaN(valA) || isNaN(valB) || isNaN(valN)) {
        alert("Please enter valid numbers for A, B, and N.");
        return;
    }

    for (let i = 1; i < valN; i++) {
        if (i % valA === 0 || i % valB === 0) {
            sum += i;
        }
    }

    alert("The sum of multiples of " + valA + " or " + valB + " below " + valN + " is: " + sum);
}
