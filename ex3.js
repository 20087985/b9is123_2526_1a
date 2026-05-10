let listEuler1 = (a, b, l) => {
    let sum = 0;
    for (let num of l) {
        if (num % a === 0 || num % b === 0) {
            sum = sum + num;
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
        let isMultiple = false;
        for (let divisor of a) {
            if (num % divisor === 0) isMultiple = true;
        }
        return isMultiple ? total + num : total;
    }, 0);
}

let eulerlist = () => {
    let a = 2;
    let b = 3;
    let l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
    let result = listEuler1(a, b, l);
    alert("ListEuler1 Sum: " + result);
}

let euler2Lists = () => {
    let a = [2, 3];
    let l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
    let result = listEuler2(a, l); // Now calling the function
    alert("ListEuler2 Sum: " + result);
}

let euler2Lists1 = () => {
    let a = [2, 3, 5];
    let l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
    let result = listEuler3(a, l); // Now calling the function
    alert("ListEuler3 Sum: " + result);
}
