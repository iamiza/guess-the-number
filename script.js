
    var maxGuesses = 3;
    var z = maxGuesses;
    var numOfGuesses = 1;
    var y = Math.floor((Math.random() * 100) + 1);
    console.log(y);
    function guess() {
        const numInput= document.getElementById("num");
        const x = parseInt(numInput.value);
        console.log(x);
        if (numOfGuesses < maxGuesses) {
           
            if (x == y) {
                alert("Congrats you guessed it correctly in "+ numOfGuesses + " try");
                
            }
            else if (x < y) {
                alert("OPPS!! Guess a larger number." + --z + " guesses remaining");
            
            }
            else if (x > y){
                alert("OPPS!! Guess a smaller number."+ --z + " guesses remaining");
            }
            numOfGuesses++;
        }
        //if the last guess is correct 
        else if (numOfGuesses == maxGuesses && x == y)
        {
            alert("Congrats you guessed it correctly in "+ numOfGuesses + " try");
            numOfGuesses++;
        }
        //guesses are all incorrect 
        else 
        {
            alert("The number is " + y);
        }

    }


