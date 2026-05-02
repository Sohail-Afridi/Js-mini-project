
// arr[2]="Khan";
// arr[3]="Peshawar";
// console.log(arr);
// /* 
// The array in JavaScript is Muteable hence we can change its value and store in the array
// whle string in JavaScript are Amuteable we can not change the value of the string in the javascript 
// */

// //  console.log(arr2.reverse());
// //  console.log(arr.concat(arr2));
// // //console.log(arr.toString()
//

// let myname="SOHAIL afridi";
// console.log(myname.toUpperCase())
// console.log(myname.toLowerCase());

// console.log(myname);

// let arr=[12,44,55,66,33,44,6,8];
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.push("Sohail"));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.unshift(12));
// console.log(arr);
// console.log(arr.sort());
// console.log(arr.length)
// console.log(arr.splice(2,1))
// console.log(arr);

//  let a=[4,7,8,9,4,3,2];
// let newarr= a.map((e, Index, Array)=>{

//     return e**2;
// })


//TO STRING METHOD IN ARRAY
// let myarray=["Sohail Afridi", "Bs SE","Peshawar", "Jobless"].toString();
// myarray.toString();
// myarray.charCodeAt("Peshawar");
// console.log(myarray);


//AT() METHOD AT ARRAY TO FIND THE ELEMENT AT SPECIFIC LOCATION
// let list1=[12,3,4,5,55,66,77];
// console.log(list1);
// console.log("The element at  "+list1.indexOf()+ " is " +list1.at()+ " in the array");


//POP() METHOD IN JS ARRAY
let list1=[12,3,[4,5,55],[66,77]];
console.log(list1.length)
console.log(list1.at(3))
console.log(list1.indexOf(12))
list1.pop();
list1[2]=123;
console.log(list1);
let newarr=list1.flat();
console.log(newarr);


//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
// let list1=[12,3,[4,5,55],[66,77]];
// let newarr=list1.flat();
// console.log(newarr);

// list1.pop();//This method is automatically delete or remove the last element from the array
// console.log(list1);
//PUSH() METHOD IN JS ARRAY
// list1.push(123,90,88); //The push() method adds a new element to an array (at the end):
// console.log(list1);
//
//JOIN METHOD TO JOIN ARRAY 
// console.log("Original Array is \n "+a);
// console.log("New array \n "+ newarr);
// let arr=["Sohail","Afridi"];
// let arr2=["I","am","a","Software engineer"];
// console.log([arr,arr2].join(" and "));