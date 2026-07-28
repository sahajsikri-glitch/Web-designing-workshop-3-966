// //function:block of code
// const sayHello = function () {
//   console.log("cse-24 fsd");
// };
// sayHello();

// //synchronous(blocking)and asynchronus(non-blocking) js
// console.log("Task-3");
// function hello() {
//   console.log("task1");
// }
// hello();
// console.log("task");

// //arrow function for asynchronous :
// function bye() {
//   console.log("task1");
//   setTimeout(function () {
//     console.log("task2"); //1 and 3 ekdum run but this
//     //  task will run after 2 seconds
//   }, 2000);
// }
// bye();
// console.log("Task3");

// function helloYou(n1, n2, callback) {
//   console.log("task1");
//   callback();
//   return n1 + n2;
// }
// let a = 10;
// let b = 20;
// console.log(helloYou(a, b));

// helloYou(a, b, hi);

// function hi() {
//   console.log("hi");
// }
// hi();

// console.log(helloYou(2, 3));

//const promiseOne = new Promise((resolve, reject) => {
//     console.log("Promise Task 1");
//     resolve("Promises passed by using resolve");
//     if(!msg == true){
//         console.log("message using promises failed");
//     }
//     else{
//         console.log("error........");
//     }
//     setTimeout(() => {
//         console.log(resolve());
//     }, 2000)
// });
// promiseOne.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })
// console.log("1");
// async function test() {
//   console.log("2");
//   await console.log("3");
//   console.log("4");
// }
// test();
// console.log("5");
// t1 = tes();
// console.log("5");
// create promises that will print username and password using resolve
// and if username and pass not found then it will call reject state and print ERROR
// const promise = new Promise((resolve,reject)={
//   setTimeout(function(){
//     let err = true;
//     if(!err){
//       resolve("user:ABC,password:1234");
//     }
//     else{
//       reject

//     }
//   }
// });

async function test() {
  console.log("message:1");
  // console.log("4");
  const response = await fetch("./student.json");
  const stdn = await response.json(); //await ko use karke iska data fetch kia
  return stdn;
  console.log("message:2");
}
test();
