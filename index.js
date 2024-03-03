var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDicee1="./images/dice"+randomNumber1+".png";//set img path with random no

document.querySelector(".img1").setAttribute("src",randomDicee1);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDicee2="./images/dice"+randomNumber2+".png";//set img path with random no

document.querySelector(".img2").setAttribute("src",randomDicee2);


if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 Wins!";
}
else{
    document.querySelector("h1").textContent="Player 2 Wins!🚩";
}