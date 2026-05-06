let listEuler1=(a,b,l)=>{
    let sum =0;
    for (let num of l) {
        if(num % a === 0 || num % b === 0){
            sum = sum + num;
        }
        
    }
    return sum;
    
}

let listEuler2=(a,l)=>{
    let sum = 0;
    for (let num of l){
        if (a.some(divisor => num % divisor === 0)
        {
            sum = sum + num;
        }
        
    }
    return sum;
}
let listEuler3=(a,l)=>{
    return l.reduce((total, num) =>{
        let isMultiple = false;
        for (let divisor of a){
            if(num % divisor === 0) isMultiple = true;
            
        }
        return isMultiple ? total + num : total;
    }, 0);
}


let eulerlist=()=>
{
    a=2//can un-hardcode
    b=3
    l=[1,2,3,4,5,6,7,9,10,10,10]
    let result = listEuler1(a,b,l);
    alert("The sum is:" + result);
   
}
let euler2Lists=()=>
{
    a=[2,3]//can un-hardcode
    l=[1,2,3,4,5,6,7,9,10,10,10]
    //call listEuler2 and alert.
}

let euler2Lists1=()=>
{
    a=[2,3,5]//can un-hardcode
    l=[1,2,3,4,5,6,7,9,10,10,10]
    //call listEuler3 and alert.
}
