//write a function to alert if overweight (15kg) baggage

//call it from the page

            //alert("Hello");//write a check function here...
            //update: the check function should reveal the "removed" text input
            //if the baggage is overweight
            //and a button to remove some
            //the remove function should update the weight
            //and let the user know when ok to proceed
            let check=()=>{
              let weight = parseInt(document.getElementById('weight').value);
              alert('Checking Baggage weight: '+parseInt(document.getElementById('weight').value));
              //These should only display if it is actually overweight
              if(weight > 15)
              {
                          
              document.getElementById('removed').style='display:block;'
              document.getElementById('remB').style='display:block;'
              }
            }
            let remove=()=>{
              
              let currentWeight = parseInt(document.getElementById('weight').value);
              let weightToRemove = parseInt(document.getElementById('removed').value); 
              let newWeight = currentWeight - weightToRemove;
              alert('Removing weight: '+parseInt(document.getElementById('removed').value)); 
              check();
            
            }

            //Test edit no. 2;
