

let listEuler1 = (a, b, l) => {
    let sum = 0;
    for (let num of l) {
        if (num % a === 0 || num % b === 0) {
            sum += num;
        }
    }
    return sum;
}

let listEuler2 = (a, l) => {

    let filteredList = l.filter(num => a.some(divisor => num % divisor === 0));
    let sum = 0;
    for (let num of filteredList) {

        sum += num;

    }
    return sum;

}


let listEuler3 = (a, l) => {
    return l.reduce((total, num) => {
        let isMultiple = a.some(divisor => num % divisor === 0);
        return isMultiple ? total + num : total;
    }, 0);
}



let eulerlist = () => {

    let a = parseInt(document.getElementById('a1').value);
    let b = parseInt(document.getElementById('b1').value);
    

    let lString = document.getElementById('l').value;
    let lArray = lString.split(" ").map(Number); 

    let result = listEuler1(a, b, lArray);
    alert("Sum of multiples of " + a + " or " + b + " is: " + result);
}

let euler2Lists = () => {

    let aArray = document.getElementById('aList').value.split(" ").map(Number);
    let lArray = document.getElementById('mList').value.split(" ").map(Number);

    let result = listEuler2(aArray, lArray);
    alert("Sum (List A length 2) result: " + result);
}

let euler2Lists1 = () => {

    let aArray = document.getElementById('aList').value.split(" ").map(Number);
    let lArray = document.getElementById('mList').value.split(" ").map(Number);

    let result = listEuler3(aArray, lArray);
    alert("Sum (Any length List A) result: " + result);
}
