//for first dice
var randomNumber=Math.floor(Math.random()*6)+1;//change dice from 1 to 6
var randomImage="images/dice"+randomNumber+".png";//will chnge the current image of dice to a ramdom dice image
var image1=document.querySelectorAll("img")[0];//change the first image
image1.setAttribute("src",randomImage);//set the attribute of first image

//for second dice
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];//change the second image
image2.setAttribute("src",randomImage2);//set the attribute of second image

//announcing the winner
if(randomNumber===randomNumber2){
  document.querySelector("h1").innerHTML=("Draw!👌");
}else if (randomNumber>randomNumber2) {
  document.querySelector("h1").innerHTML=("🚩player 1 wins");
}else{
  document.querySelector("h1").innerHTML=("player 2 wins🚩");
}
