// (function(a,b){
//     console.log("Hey i am sohail");
   
//     let sum=a+b;
//     console.log(sum);

// })(22,44)

//DISTRUCTURING CONCEPT IN JAVASCRIPT
 const data=["sohail", 'kamran', "sumeera", "ali","Eshaal"];
const {4:name2}=data;
//  const [,,name2,,name4]=data;

const info={
    name:"Sohail",
    age:25,
    occupation:"Nothing",
    specialization:"Web Developer",
    salery:"0K"
}
const {name:n, age:a,salery:s}=info;

function sum (a1,b,c,d)
{
    return a1+b+c+d;
}
let arr=[23,45,66,44]
console.log(sum(...arr));

