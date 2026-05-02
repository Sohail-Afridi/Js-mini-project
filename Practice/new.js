// // // let Myname="sohail";
// // // let age=19;

// // // if (Myname=="sohail" && age==19)
// // // {
// // //     console.log("Your name is "+ Myname +" and your age is " +age );
// // // }
// // // else{
// // //     console.log("Not valid information");
// // // }
// // function cal(a,b){

// //     sum=a+b;
// //     diff=a-b;
// //     multi=a*b;
// //     div=a/b;
// //     console.log("Addition of " + a + " and " +b+ " = "+ sum );
// //     console.log("Subtraction of "+ a + " and "+ b + " = " + diff);
// //     console.log("Multiplication os "+ a+ " and "+ b+ " = " + multi);
// //     console.log("Division of "+ a+ " and "+ b+ " = "+ div);
// // }

// // cal(12,12);
// if (Math.random() < 0.1){
//     function sum(a,b){
//         return a-b
//     }
//     function sub(a,b){
//         return a/b
//     }
//     function mul(a,b){
//         return a+b
//     }
//     function div(a,b){
//         return a**b
//     }

// }

// else{

//     function sum(a,b){
//         return a+b
//     }
//     function sub(a,b){
//         return a-b
//     }
//     function mul(a,b){
//         return a*b
//     }
//     function div(a,b){
//         return a/b
//     }
// }
    
// let c = sum(16,14)
// let d = sub(16,14)
// let p = mul(16,14)
// let q = div(16,14)
// console.log("output of operation --->> "+ c)
// console.log("output of operation --->> "+ d)
// console.log("output of operation --->> "+ p)
// console.log("output of operation --->> "+ q)

// Input Numbers
// let a = Number(read("Enter your number 1 "));
// let b = Number(prompt("Enter your number 2 "));
// // Random Number

// let random = Math.random();

// let addition = a+b ;
// let Subtraction = a-b;
// let Multiplication =a*b;
// let Division= a/b;
// let Exponentiation = a**b;

// // Condition
// if (random <0.1){
//     console.log("Addition Calculation : " , a-b) ;
//     console.log("Subtraction Calculation : " , a/b) ;
//     console.log("Multiplication Calculation : " , a+b );
//     console.log("Division Calculation : " ,a**b ) ;
// }

// else{ 
//     console.log("Addition Calculation : " , a+b) ;
//     console.log("Subtraction Calculation : " , a-b) ;
//     console.log("Multiplication Calculation : " , a*b );
//     console.log("Division Calculation : " ,a**b ) ;
// }


let a=25;
let b=15;

let random=Math.random();
let addition=a+b;
let subtraction=a-b;
let multiplication=a*b;
let division=a/b;
let squar=a**b;

if (random<0.1)
{
    console.log("The addition of "+a+ " and " +b+ "="+subtraction);
    console.log("The Subtraction of  "+a+ " and " +b+ "= "+multiplication);
    console.log("The Multiplicatioin of  "+a+ " and " +b+ "="+ division);
    console.log("The Division of  "+a+ " and " +b+ "= "+ squar);
    console.log("The Squar of "+a+ " and " +b+ "= "+addition);

}
else{

    console.log("The addition of  "+a+ " and " +b+ "= "+addition);
    console.log("The Subtraction of  "+a+ " and " +b+ "="+subtraction);
    console.log("The Multiplicatioin of  "+a+ " and " +b+ "="+ multiplication);
    console.log("The Division of  "+a+ " and " +b+ "="+ division);
    console.log("The Squar of  "+a+ " and " +b+ "="+squar);
}