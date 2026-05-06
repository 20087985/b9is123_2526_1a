let check = () => {
    let weight = parseInt(document.getElementById('weight').value);
 
    if (weight > 15) {
        alert("Baggage is overweight! (Limit: 15kg)");
        document.getElementById('removed').style.display = 'block';
        document.getElementById('remB').style.display = 'block';
    } else {
        alert("Weight is okay. You may proceed.");
        
        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
    }
}


let remove = () => {
    // 1. Get the numbers from the page
    let currentWeight = parseInt(document.getElementById('weight').value);
    let weightToRemove = parseInt(document.getElementById('removed').value); 
    
    // 2. Do the math
    let newWeight = currentWeight - weightToRemove;
    
    // 3. THIS IS THE MISSING PART: Update the box on the screen!
    document.getElementById('weight').value = newWeight; 
    
    alert('Removing weight: ' + weightToRemove + 'kg'); 
    
    // 4. Now when check() runs, it looks at the box and sees the NEW number
    check();
}
