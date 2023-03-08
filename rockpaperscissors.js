function getComputerChoice(){
    const values =["Rock", "Paper", "Scissors"];
    return values[Math.floor(Math.random()*values.length)];
}

function play(playerSelection, computerSelection){
    const playerSelectiontoUp=capitalize(playerSelection);
    if (playerSelectiontoUp == computerSelection){
        return "Draw, eine Runde für die Katz";
    } else if (playerSelectiontoUp=="Rock" && computerSelection=="Scissors"){
        return ("Du gewinnst, " + playerSelectiontoUp + " schlägt " + computerSelection);
    } else if (playerSelectiontoUp=="Rock" && computerSelection!="Scissors"){
        return ("Du verlierst, " + computerSelection + " schlägt " + playerSelectiontoUp);
    } else if (playerSelectiontoUp=="Paper" && computerSelection=="Rock"){
        return ("Du gewinnst, " + playerSelectiontoUp + " schlägt " + computerSelection);
    } else if (playerSelectiontoUp=="Paper" && computerSelection!="Rock"){
        return ("Du verlierst, " + computerSelection + " schlägt " + playerSelectiontoUp);
    } else if (playerSelectiontoUp=="Scissors" && computerSelection=="Paper"){
        return ("Du gewinnst, " + playerSelectiontoUp + " schlägt " + computerSelection);
    } else if (playerSelectiontoUp=="Scissors" && computerSelection!="Paper"){
        return ("Du verlierst, " + computerSelection + " schlägt " + playerSelectiontoUp);
    } else 
        return ("Da ist was schief gelaufen");
}

function capitalize(text){
    const firstLetter = text.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = text.slice(1).toLowerCase();
    const capitalizedWord = firstLetterCap + remainingLetters
    return capitalizedWord;
}

function game(){
    let compPoints = 0;
    let humanPoints = 0;
    let ergebnis;
    for (let i = 0; i<5; i++){
        playerSelection = prompt("Bitte gib Rock / Paper / Scissors ein");
        ergebnis = play(playerSelectiontoUp(playerSelection), getComputerChoice());
        if(ergebnis.prototype.includes("gewinnst")){
            humanPoints++;
        } else if (ergebnis.prototype.includes("verlierst")){
            compPoints++;
        }
    }
    if (humanPoints<compPoints) {
        console.log("Oh nein, der Computer hat gewonnen");
    } else if (humanPoints>compPoints){
        console.log("Du gewinnst!");
    }
     else if (humanPoints==compPoints){
        console.log("Unentschieden, du musst wohl weiterspielen")
     }
     else { console.log("Hier stimmt etwas nicht");}
}

