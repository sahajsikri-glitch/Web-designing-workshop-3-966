//function:block of code
const sayHello = function () {
  console.log("cse-24 fsd");
};
sayHello();

//synchronous(blocking)and asynchronus(non-blocking) js
console.log("Task-3");
function hello() {
  console.log("task1");
}
hello();
console.log("task");

//arrow function for asynchronous :
function bye() {
  console.log("task1");
  setTimeout(function () {
    console.log("task2"); //1 and 3 ekdum run but this
    //  task will run after 2 seconds
  }, 2000);
}
bye();
console.log("Task3");

function helloYou(n1, n2) {
  console.log("task1");
  return n1 + n2;
}
let a = 10;
let b = 20;
console.log(hello(a, b));
