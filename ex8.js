




def f3(a,l){
 let filteredList = l.filter(num => a.some(divisor => num % divisor === 0));
    let sum = 0;
    for (let num of filteredList) {

        sum += num;

    }
    alert('sum of multiples:' + sum);
    return sum;
}


   
