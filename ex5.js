let parse = (i) => {
    let o = parseInt(i);
    if (isNaN(o)) {
        throw ("NaN");
    }
    return o;
}


let processEulerCorrupt = (inputString) => {
    let output = "";
    try {
        let parts = inputString.split(":");
        if (parts.length < 2) throw "MissingColon";

        let factors = parts[0].trim().split(" ").map(f => parse(f));
        let multiples = parts[1].trim().split(" ").map(m => parse(m));

  
        let sum = 0;
        for (let num of multiples) {
            if (factors.some(f => num % f === 0)) {
                sum += num;
            }
        }
        output = sum + " : " + inputString;
    } catch (e) {
        output = "corrupt : " + inputString;
    }
    
    alert(output); 
    return output;
}

// Exercise 5: The "Forgiving" Version
let processEulerOmitCorrupt = (inputString) => {
    let output = "";
    try {
        let parts = inputString.split(":");
        if (parts.length < 2) throw "MissingColon";

        let cleanList = (str) => {
            return str.trim().split(" ").filter(item => {
                try {
                    parse(item);
                    return true;
                } catch (e) {
                    return false; 
                }
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
        output = sum + " : " + inputString;
    } catch (e) {
        output = "corrupt : " + inputString;
    }

    alert(output); // This pops up the box on your screen
    return output;
}
