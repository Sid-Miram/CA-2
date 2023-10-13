const keyboard = document.querySelector(".keyboard")
const words = document.querySelector(".words");
const hangmanImg = document.querySelector(".hangman img");
const guesses = document.querySelector(".guess span");

const Gamepad=(button, clickedLetter) => {
    if(currentCon.includes(clickedLetter)){
        [...currentCon].forEach((letter, index)  => {
            if(letter === clickedLetter){
                cletters.push(letter)
                words.querySelectorAll("li")[index].innerText = letter;
                words.querySelectorAll("li")[index].classList.add("guessed"); 

            }
        })
    } else{
        wguesses++;
        hangmanImg.src = `hangman-${wguesses}.svg`;

    }
    button.disabled = true; 
    guesses.innerText = `${wguesses} / ${mguesses}`;
    if(wguesses === mguesses){
        location.href = "gameover.html"
        localStorage.setItem("pscore", pscore);
        document.getElementById("pscore").innerHTML = pscore;
    }if(cletters.length=== currentCon.length){
        location.href = "game.html"
        ppscore += 1;
        localStorage.setItem
        
    }
}
let currentCon;
let wguesses = 0;
const mguesses = 6;
let ppscore = 0;
let cletters = [];
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i); 
    keyboard.appendChild(button);   
    button.addEventListener("click", e => Gamepad(e.target, String.fromCharCode(i)));
}
const RandomCountries = ()=>{
    const{country, hint} = list[Math.floor(Math.random() * list.length)];
    currentCon = country;
    console.log(country);
    document.querySelector(".hint span").innerText=hint;
    words.innerHTML = country.split("").map(()=>`<li class="letter"></li>`).join("");
}
RandomCountries();
const pscore = localStorage.getItem("pscore")
if(pscore){
    const score = document.getElementById("score")
    score.innerText = pscore;  
}else{
    const score = document.getElementById("score")
    score.innerText= "xx" 
}