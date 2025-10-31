function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    diceImages.innerHTML = "";
    for(let i=0; i<numOfDice; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        const img = document.createElement("img");
        img.src = `dice_images/${value}.png`;
        img.alt = `Dice ${value}`;
        diceImages.appendChild(img);
        images.push(img);
    }
    diceResult.textContent = `You rolled: ${values.join(", ")}`;
}