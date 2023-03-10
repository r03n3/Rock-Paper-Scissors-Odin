function getComputerChoice(){   /** Random choice of an arrayindex with the output Rock, Paper... */
    const values =["Rock", "Paper", "Scissors"];
    return values[Math.floor(Math.random()*values.length)];
    
}

function play(playerSelection, computerSelection){
    //const playerSelectiontoUp=capitalize(playerSelection);  /** adding case insensitivity */
   
    if (playerSelection == computerSelection){ /** various cases which can occur and define different outcomes of the game */
        return "Draw, eine Runde für die Katz";
    } else if (playerSelection=="Rock" && computerSelection=="Scissors"){
        return ("Du gewinnst, " + playerSelection + " schlägt " + computerSelection);
    } else if (playerSelection=="Rock" && computerSelection!="Scissors"){
        return ("Du verlierst, " + computerSelection + " schlägt " + playerSelection);
    } else if (playerSelection=="Paper" && computerSelection=="Rock"){
        return ("Du gewinnst, " + playerSelection + " schlägt " + computerSelection);
    } else if (playerSelection=="Paper" && computerSelection!="Rock"){
        return ("Du verlierst, " + computerSelection + " schlägt " + playerSelection);
    } else if (playerSelection=="Scissors" && computerSelection=="Paper"){
        return ("Du gewinnst, " + playerSelection + " schlägt " + computerSelection);
    } else if (playerSelection=="Scissors" && computerSelection!="Paper"){
        return ("Du verlierst, " + computerSelection + " schlägt " + playerSelection);
    } else 
        return ("Da ist was schief gelaufen");

}
/* Not used anymore since there is no manual text input anymore, instead we rely on pressing buttons
function capitalize(text){ 
    const firstLetter = text.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = text.slice(1).toLowerCase();
    const capitalizedWord = firstLetterCap + remainingLetters
    return capitalizedWord;
}
*/
function game(){
    let compPoints = 0;
    let humanPoints = 0;
    let input;
    const btn1 = document.querySelector("#rock");
    const btn2 = document.querySelector("#paper");
    const btn3 = document.querySelector("#scissors");

    //adding buttonfunctions so the playerchoice is saved on a mouseclick
    btn1.addEventListener("click", () => { input = "Rock";
    console.log("ROCK");
    const result = play(input,getComputerChoice());
    if(result.includes("gewinnst")){
        humanPoints++;
        } else if (result.includes("verlierst")){
        compPoints++;
        } 
        console.log(result);
        console.log(compPoints);
        console.log(humanPoints);
        if (humanPoints<compPoints && compPoints==5) {
            console.log("Oh nein, der Computer hat gewonnen");
        } else if (humanPoints>compPoints && humanPoints==5){
            console.log("Du gewinnst!");
        }
         else if(humanPoints <= 0 && compPoints <=0) { console.log("Hier stimmt etwas nicht");}    
    }
    );

    btn2.addEventListener("click", () => { input = "Paper"; 
    const result = play(input,getComputerChoice());
    if(result.includes("gewinnst")){
        humanPoints++;
        } else if (result.includes("verlierst")){
        compPoints++;
        }
        console.log(result);
        console.log(compPoints);
        console.log(humanPoints);
        if (humanPoints<compPoints && compPoints==5) {
            console.log("Oh nein, der Computer hat gewonnen");
        } else if (humanPoints>compPoints && humanPoints==5){
            console.log("Du gewinnst!");
        }
         else if(humanPoints <= 0 && compPoints <=0) { console.log("Hier stimmt etwas nicht");}    
    }
    );

    btn3.addEventListener("click", () => { input = "Scissors";
    const result = play(input,getComputerChoice());
    if(result.includes("gewinnst")){
        humanPoints++;
        } else if (result.includes("verlierst")){
        compPoints++;
        }
        console.log(result);
        console.log(compPoints);
        console.log(humanPoints);
        if (humanPoints<compPoints && compPoints==5) {
            console.log("Oh nein, der Computer hat gewonnen");
        } else if (humanPoints>compPoints && humanPoints==5){
            console.log("Du gewinnst!");
        }
         else if(humanPoints <= 0 && compPoints <=0) { console.log("Hier stimmt etwas nicht");}    
    } );




 /*   for (let i = 0; i<5; i++){ /** Running the game 5 times after it display the winner depending on gained points */
   /*     input = prompt("Bitte gib Rock / Paper / Scissors ein");
        input = capitalize(input);
        ergebnis = play(input, getComputerChoice());
        if(ergebnis.includes("gewinnst")){
            humanPoints++;
        } else if (ergebnis.includes("verlierst")){
            compPoints++;
        }*/
        
    //}

}

game();