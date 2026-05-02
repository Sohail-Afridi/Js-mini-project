// console.log("---------------------THIS IS PROMISES IN JAVASCRIPT----------------------------");

// let promis=new Promise((resolve, reject)=>
// {
//     let rand=Math.random();
//     if (rand<0.9)
//     {
//         reject("Hello It is not a good number: Try again and resolve it");

//     }
//     else{
//         setTimeout(()=>
//         {
//             console.log("Yes I am Done: ");
//             resolve("Good Bhai resolve Hogaya");
//         },2000)
//     }
// })
// let promis2=new Promise((resolve, reject)=>
//     {
//         let rand=Math.random();
//         if (rand<0.5 )
//         {
//             reject("Hello It is not a good number: Try again and resolve it 2");
    
//         }
//         else{
//             setTimeout(()=>
//             {
//                 console.log("Yes I am Done:2 ");
//                 resolve("Good Bhai resolve Hogaya 2");
//             },1000)
//         }
//     })
// let p=Promise.any([promis,promis2])
// promis.then((a)=>
// {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err)

// });
//****************************ASYNCHRONOUS IN JS********************************* */
// async function hello() {
//     let data=  await"hello World 2222";
//     return data;
// }

// hello().then(data=>console.log(data));

const getData = async () => {
    let y =await "Hello World";
    return y;
}
function sum(a,b){
   
    
    let add=a+b; 
    console.log(add);  
}
sum(33,55);
getData().then(y=>console.log(y));
console.log(2);