let students = ["Sohail", "AfridiKhan", "ali", "kamranKhan", "Asad", "Abbas afridi",
    "ImranAbas", "Ammaarr", "abshsdfkjdfkjghg"
];
let houses = [];

for (const name of students) {
    if (name.length < 6) {
        houses.push("Gryffindor");
    }

    else if (name.length < 8) {
        houses.push("Hufflepuff");
    }
    else if (name.length < 12) {
        houses.push("RavenClaw");
    }
    else {
        houses.push("Slytherin");
    }
}

console.log(houses);


//QUESTION NO 01

let result=[];
function doubleTheNumber(){
for (let i=0; i<arr.length; i++)
{
    if(arr[i]===arr[i+1])
    {
        result.push(arr[i]*2);
        i++;
    }
    else{
        result.push(arr[i]*2);
    }

}
return result;
}
let arr = [1, 1, 2, 3, 3, 4, 5, 5];
console.log(doubleTheNumber(arr));


let a=10;
let str="sohail";

let sum=parseInt(str*a);
console.log(sum);
