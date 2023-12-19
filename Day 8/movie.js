const favMovie = "avatar";

let guess = prompt("guess my favorite mobie");

while( (guess != favMovie) && (guess != "quit")){
    guess = prompt("wrong guess. please try again");
}

if(guess == favMovie){
    console.log("congrats!!")
}