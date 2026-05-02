// /*****************ADD EVENT LISTNER*********************** */


// // document.querySelector(".container").addEventListener("click", (e)=>{
// //     e.stopPropagation();
// //     document.querySelector(".container").innerHTML="<b>Hello i am a container</b>";
// // })
// // document.querySelector(".childcontainer").addEventListener("click", (e)=>{
// //     e.stopPropagation();
// //     document.querySelector(".childcontainer").innerHTML="<b>Hello i am a childcontainer</b>";
// // })
// // document.querySelector(".child").addEventListener("click", (e)=>{
// //     e.stopPropagation();
// //     document.querySelector(".child").innerHTML="<b>Hello i am a child</b>";
// // })


// // NOW LETS SEE THE REMOVE EVENT LISTNER OF THE JS
// document.querySelector(".container").removeEventListener("click", (e)=>{
        
//         document.querySelector(".container").innerHTML="<b>Hello i am a container</b>";
//     })
//     document.querySelector(".childcontainer").removeEventListener("click", (e)=>{
//         e.stopPropagation();
//         document.querySelector(".childcontainer").innerHTML="<b>Hello i am a childcontainer</b>";
//     })
//     document.querySelector(".child").removeEventListener("click", (e)=>{
//         e.stopPropagation();
//         document.querySelector(".child").innerHTML="<b>Hello i am a child</b>";
//     })
// //POP() AND PUSH() METHOD IN S ARRAY
//     let fruits=[12,12,23,41,4,44,53,90];
//     document.getElementById("demo").innerHTML="The original list is "+ fruits;
   
//     document.getElementById("demo1").innerHTML=fruits.push(12);
//     fruits.pop();
//     document.getElementById("demo1").innerHTML=fruits;

//     //shifting is equivalent to popping, but working on the first element instead of the last
//     fruits.shift();
//     document.getElementById("demo2").innerHTML="Shift the first element we can say remove ["+fruits+"]";

//     //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// fruits.unshift(11636);
// document.getElementById("demo3").innerHTML="The unshift method called ["+ fruits+"]";

// //Array elements are accessed using their index number:
// fruits[1]="Sohail afridi";
// document.getElementById("demo4").innerHTML="The name is inserted at index 1 ["+fruits+"]";


// //The concat() method creates a new array by merging (concatenating) existing arrays:
// //The concat() method does not change the existing arrays. It always returns a new array.
// // The concat() method can take any number of array arguments, hence we can add any number of array to concatenate
// let list0=["hello", "dear","hey"];
// let Flist=fruits.concat(list0);
// document.getElementById("demo4").innerHTML= "The concatenation method called jonining the two array ["+Flist+"]";

// /* 
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:
// */

// // fruits.splice(2);
// // document.getElementById("demo6").innerHTML="Delete all Items from index two including 2 index ["+fruits+"]";
// Flist.splice(0,2,"New", "mEtooNew");
// document.getElementById("demo6").innerHTML="Delete only two element starting from 0 to 1 index 2 is not included Items ["+Flist+"]"

// let obj={name:"sohial",
//     address:"peshawar",
//     contact:"03010587327"
// }
// for (const key in obj) {
//   console.log(key);
  
// }

// let array1=[1,23,45,6,8];
// array1.map((value,index,array)=>{
//   console.log(value+5);
// })

let inpt=prompt("Enter your age");
backgroundColor="";

if (inpt==="green")
{
  document.body.style.backgroundColor= "green";

}

else if (inpt==="blue")
  {
    document.body.style.backgroundColor= "blue";
  
  }
  
else if (inpt==="yellow")
  {
    document.body.style.backgroundColor= "yellow";
  
  }
  
else if (inpt==="black")
  {
    document.body.style.backgroundColor= "black";
  
  }

else
{
  alert("Wrong Input")
}




