function getComputerChoice(){
    const values =["Rock", "Paper", "Scissors"];
    return values[Math.floor(Math.random()*values.length)];
}