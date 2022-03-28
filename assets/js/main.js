// creo la costante selezionando il container
const rowGame = document.getElementById("game");

// creo il for loop iterando dal numero 1 al 100
for (let x = 1; x <= 100; x++) {

    // creo la prima condizione per i multipli di 3
    if ((x % 3 == 0) && (x % 5 == 0)) {

        fizzBuzz = document.createElement("div");
        fizzBuzz.classList.add("fizz_buzz");
        fizzBuzz.append("FizzBuzz");
        rowGame.append(fizzBuzz);

    // creo la seconda condizione per i multipli di 5
    } else if (x % 5 == 0) {

        buzz = document.createElement("div");
        buzz.classList.add("buzz");
        buzz.append("Buzz");
        rowGame.append(buzz);

    // creo la terza condizione sia per i multipli di 5 che di 3
    } else if (x % 3 == 0) {

        fizz = document.createElement("div");
        fizz.classList.add("fizz");
        fizz.append("Fizz");
        rowGame.append(fizz);

    } else {
        notMultiple = document.createElement("div");
        notMultiple.classList.add("not_multiple");
        notMultiple.append(x)
        rowGame.append(notMultiple);
    }
        
}

