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
    let currentWeight = parseInt(document.getElementById('weight').value);
    let weightToRemove = parseInt(document.getElementById('removed').value); 
    
    
    let newWeight = currentWeight - weightToRemove;
    document.getElementById('weight').value = newWeight; 
    
    alert('Removed ' + weightToRemove + 'kg. New weight is ' + newWeight + 'kg.'); 
    
  
    check();
}
