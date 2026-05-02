let rand = Math.random();
let first, second, third;
if (rand < 0.33) {
    first = "Crazy";
}
else if (rand<0.66 && rand>=0.33) {
    first = "Amazing";
}
else {
    first = "Fire";
}

//Lets generate the second word
if (rand < 0.33) {
    second = "Engine";
}
else if (rand<0.66 && rand>=0.33) {
    second = "Food";
}
else {
    second = "Garments";
}


//Lets generate the third one word

if (rand < 0.33) {
    third = "bros";
}
else if (rand<0.66 && rand>=0.33) {
    third = "Limited";
}
else {
    third = "Hub";
}
console.log(`${first}  ${second}  ${third}`);