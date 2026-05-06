
let parse = (i) => {
    let o = parseInt(i);
    if (isNaN(o)) {
        throw ("NaN");
    }
    return o;
}

let processEulerCorrupt = (inputString) => {
  
        let parts = inputString.split(":");
        
        
        if (parts.length < 2) {
            throw "MissingColon";
        }

       
        let factors = parts[0].trim().split(" ").map(f => parse(f));
        let multiples = parts[1].trim().split(" ").map(m => parse(m));

        
        let sum = 0;
        for (let num of multiples) {
            if (factors.some(f => num % f === 0)) {
                sum += num;
            }
        }
        return sum + " : " + parts[0].trim() + " : " + parts[1].trim();

   
}


let processEulerOmitCorrupt = (inputString) => {
    let parts = inputString.split(":");
    if (parts.length < 2) return "corrupt : " + inputString;

   
    let cleanList = (str) => {
        return str.trim().split(" ").filter(item => {
          
                parse(item);
                return true; 
           
        }).map(Number);
    };

    let factors = cleanList(parts[0]);
    let multiples = cleanList(parts[1]);

    let sum = 0;
    for (let num of multiples) {
        if (factors.some(f => num % f === 0)) {
            sum += num;
        }
    }
    
    return sum + " : " + parts[0].trim() + " : " + parts[1].trim();
}
