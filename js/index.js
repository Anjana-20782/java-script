// 1)Variable

// let x=10;
//  console.log(X);     //X is not defined

// let a=5+ +"5";
// console.log(a);    //10

// let a=5+"5";
// console.log(a);    //55

// let a=5-"5"
// console.log(a);      //0

// // var a=10;
// let a=10;
// function myFunction(){

//     // var a=10;
//     //   let a=10;
//     console.log("inside function");
//     console.log(a);

// }
// // myFunction();
// console.log("outside function");
// myFunction();
// // console.log(a);

// 2)Datatypes

//  let a="";
//  console.log(Boolean(a));    //false

// let a=3;
// console.log(Boolean(a));    //true

// let a=0;
// console.log(Boolean(a));   //false

// let a=55;
// let b=56;
// console.log(b);

// console.log(String(a));  //557

// 3)nested for loop

// for(i=1;i<=5;i++)
// {
//     console.log("hai").       //5.hai
// }

// for(i=1;i<=5;i++){

//     for(j=1;j<=5;j++){

//     console.log(j);              //12345 12345 12345 12345 12345

//     }
// }

// for(i=1;i<=5;i++){

//     for(j=1;j<=5;j++){

//     console.log(i);                //11111 22222 33333 44444 55555

//     }
// }

// for(i=1;i<=5;i++){

//     for(j=1;j<=i;j++){

//     console.log(i);                 //1 22 333 4444 55555

//     }
// }

// for(i=1;i<=5;i++){

//     for(j=1;j<=i;j++){

//     console.log(j);                 //1 12 123 1234 12345

//     }
// }

// while loop

// i=10;
// while(i<=20){

//     console.log(i)
//     i++
// }

// do-while loop

// i=1;
// do{
//     console.log(i)
//     i++

// while(i<=0)

//function

// function asd(){

//     console.log("hello");                //hello

// }
// asd()

// function asd(a,b){

//    return a+b

// }
// console.log( asd(10,20));                   //30

//function with argument and return

// function asd(a){

//    return a*3                            //15(function withn argument and return)

//  }
//  console.log( asd(5));

//function with return

// function asd(){

//    return 6*3                               //18(function with return)

//  }
//  console.log( asd());

// 1)function declaration

// function add(a,b){

//     let x=a+b;                  //8
//     return(x)
// }
// console.log(add(5,3));

//function declaration
//   greet("Alice");
// function greet(name) {              //hello alice
//   console.log("Hello, " + name);

// }

//function expression
// let great=function add(a,b)
// {
//     let sums=a+b;
//     console.log(sums);            //50

// }
//  great(10,40)

//ananymous function

//  let car=function(name){

//     console.log("hello "+name);          hello alice

//  }
//  car("alice")

// function greet(){

//     console.log("hey");

// }
// greet(function(){

//     console.log("first");

// })
// console.log(greet);

//not hoisted function expression

// greet("welcome")
// let greet=function asd(a){

//     console.log("hello " +a);           //cannot acess grett before initialisation

// }

//arrow function

// let greet=(a,b)=>a+b
// console.log(greet(10,40));              //50

//recursive function

// function myFunction(){

//     console.log("aliyooooooo......");       //maximum call stack size executed
//     myFunction()

// }
// myFunction()

// let x=1
// function myFunction(){

//     console.log("aliyooooooo......");        //aliyoooooo.....  aliyoooooo.....  aliyoooooo.....  aliyoooooo.....  aliyoooooo.....
//     if(x<5)
//     {
//         x++
//         myFunction()
//     }

// }
// myFunction()

// function aliya(x){

//     if(x<=5){

//         console.log("aliyooo......."+x);
//         aliya( x++)

//     }

// }
// aliya(5)

// function asd(n){

//     if(n==0){

//         return 1;                //120
//     }
//     return n * asd(n-1);
// }
// console.log(asd(5));

// let arr = ['abhi','asd','fdsa']
// let arr1 = [1,2,3,4]
// let arr2 = [1,2,4,6]

// for of

// for(items of arr){
//         console.log(items)               //abhi asd fdsa
// }

// forEach

// arr.forEach( (item, index) => {
//         console.log(item)
//         console.log(index)                  // 0 abhi 1 asd 2 fdsa
// });

// arr methods

// let x = arr.map((value,index)=>${index}-${value})            // 0-abhi 1-asd 2-fdsa
// let x = arr.filter((value)=>value!="asd")                    // 0:abhi 2:fdsa
// let x = arr.find((value)=>value=="asd")                       //asd
// let x = arr1.reduce((tot,val)=>tot + val,100)                      //110
// let x = arr2.some(num=>num%2==0)                                    //true
// let x = arr2.every(num=>num%2==0)                               //false

// console.log(x)

//json

// let obj = [
//   { name: "milen", age: 20, city: "surat" },
//   { name: "milen", age: 20, city: "surat" },
//   { name: "milen", age: 20, city: "surat" },
//   { name: "milen", age: 20, city: "surat" },
// ];

// let jsonobj = JSON.stringify(obj);
// // console.log(obj);
// console.log(jsonobj);

// let obj1 = JSON.parse(jsonobj);
// console.log(obj1);

//call by value

// a=10;
// b=a;
// b+=1
// console.log(a);         //10
// console.log(b);        //11

//call by reference

// a=[100]
// b=a
// b[0]+=1
// console.log(a);                 //101
// console.log(b);                 //101

//sperad operator

// a=[100]
// b=[...a]
// b[0]+=1
// console.log(a);                 //100
// console.log(b);                 //101

//Deep copy

// let users1={name:"anjana",age:20,adress:{city:"kochi",pincode:678004}}

// let users2=JSON.parse(JSON.stringify(users1))

// users2.adress.city="tvm"

// console.log(users1);                 //kochi
// console.log(users2);                 //tvm

//shallow copy

// let users1={name:"anjana",age:20,adress:{city:"kochi",pincode:678004}}

// let users2={...users1}

// users2.adress.city="tvm"

// console.log(users1);             //tvm
// console.log(users2);             //tvm

//this

// obj={
//     a:5,
//     b:3,                                                     //8
//     c:function(){
//         //console.log(a+b)      //a is not defined
//         console.log(this.a+this.b);
//     }
// }
// obj.c()

//inside a regular fn

// function asd(){
//window
//     console.log(this);

// }
// asd()

//inside constructor

// function person(name)
// {
//     console.log(this);
//     this.name=name;
//     this.greet=function(){
//         console.log(this);

//     }

// }

// const p1=new person("anjana")
// console.log(p1);
// p1.greet

// obj={
//     name:"kiran",
//     fun:()=>{

//         console.log(this);

//     }
// }

//set

// obj.fun()

// let students = new Set(["abhi","rahul","abhi"]);
// students.add("valsan");

// console.log(students); // Output: Set(2) {"Abhi", "Rahul"}

// console.log(students.has("Abhi")); // true

// console.log(students.size); // 2

// students.delete
// console.log(students);

//map

// let person = new Map([
//     ["name","abhi"],
//     ["age","21"],
//     ["city","aluva"],
// ])

// console.log(person)
// person.set("place","kadungalloor")
// console.log(person)
// console.log(person.size)
// console.log(person.get("age"))
// console.log(person.has("age"))
// person.delete("place")
// console.log(person)
// person.clear()
// console.log(person)

//stack

// let stack=[]

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack);

// stack.pop();
// console.log(stack);

// console.log(stack[stack.length-1]);
// console.log(stack.length===0);

//queue

// let queue=[]

// queue.push("Anjana")
// queue.push("Pavan")
// queue.push("Abhijith")
// console.log(queue);

// queue.shift();
// console.log(queue);

// console.log(queue[queue.length-1]);
// console.log(queue.length);

//object method

// obj = {
//     name:"abhijith",
//     city:"aluva",
//     age:21

// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

//  let car = { brand: "Tesla", model: "Model 3", year: 2024 };

//  console.log(Object.keys(car));

//setinterval

// setInterval(()=>{
//     document.writeln("*")              //********************* contiues/
// },1000)

// i=1
// let x= setInterval(()=>{
//     document.writeln("*")
//     i++                                  //9 times
//     if(i==10)
//     {
//         clearInterval(x)
//     }
//      },1000)

//settimeout

// setTimeout(()=>{

//     document.writeln("*")               //*
// },1000)

// function asd()
// {

//      setTimeout(()=>{

//     document.writeln("*")
//     asd()                                   //continues star
//     },1000)
// }
// asd()

//synchronous

// console.log("start");
// for(i=0;i<=10;i++)
// {
//     console.log(i);                     //step-by-step

// }
// console.log("stop");

//asynchronous

// console.log("start");
// setTimeout(()=>{
//     for(i=0;i<=10;i++)
//  {
//      console.log(i);                     //start
//                                         //stop
//  }                                    //numbers
// },1000)
// console.log("stop");

// console.log("start");
// setTimeout(()=>{
//     for(i=0;i<=10;i++)
//  {
//      console.log(i);                     //start
//                                         //stop
//  }                                    //numbers
// },0)
// console.log("stop");

// console.log(typeof(null))
// console.log(null==undefined);
// console.log(null===undefined);

// console.log([]==![]);



//call

// let obj1={a:10,b:20}
// let obj2={c:function(){
//     console.log(this.a+this.b);

// }}

// obj2.c()                    //nan
// a=obj2.c
// a.call(obj1)                //30

// let person1={name:"anjana"}
// let person2={name:"anandhu"}

// function greet(city,country)
// {
//     console.log(`hello ${this.name} from ${city},${country}`);

// }
// greet.call(person1,"palakkad","india")                      //call
// greet.apply(person2,["allapuzha","india"])                  //apply

// let x=greet.bind(person1,"palakkad","india")                //bind
// x()



//inheritance simple example

// class Parent {
//   sayHello() {
//     console.log("Hello from Parent");
//   }
// }

// class Child extends Parent {
//   sayHi() {
//     console.log("Hi from Child");
//   }
// }

// let c = new Child();//new keyword is using create a new object
// c.sayHello(); // inherited from Parent
// c.sayHi();    // from Child



//constructor in inheritance

//  class Parent {
//    constructor(name) {            //constructoe is a special method inside a class that automatically run whem using a anew obect using new
//     this.name = name;            //this means object reference
//    }
// greet()
// {
//     console.log(`hello,${this.name}`);
// }


//  }

//  class Child extends Parent {
//    constructor(name, age) {
//      super(name); // parent constructor വിളിക്കുന്നു
//      this.age = age;
//    }
// Show()
// {
//     console.log(`${this.name} ${this.age} years old`);
    
// }
//  }

//  let c = new Child("Anjana", 22);
// c.greet()
// c.Show()
// console.log(c.name); // Anjana
// console.log(c.age);  // 22




//types in inheritance

//single inheritance

// class Animal {
//   eat() { console.log("Eating..."); }
// }

// class Dog extends Animal {
//   // bark() { console.log("Barking..."); }
//   }

// let d = new Dog();
// d.eat();
// d.bark();



//multilevel inheritance

// class Animal {
//   eat() { console.log("Eating..."); }
// }

// class Dog extends Animal {
//   bark() { console.log("Barking..."); }
// }

// class Puppy extends Dog {
//   play() { console.log("Playing..."); }
// }

// let p = new Puppy();
// p.eat();
// p.bark();
// p.play();



//hierarchial inheritance

// class Animal {
//   eat() { console.log("Eating..."); }
// }

// class Dog extends Animal {
//   bark() { console.log("Barking..."); }
// }

// class Cat extends Animal {
//   meow() { console.log("Meowing..."); }
// }

// let d = new Dog();
// let c = new Cat();

// d.eat();
// c.eat();
// d.bark();
//  c.meow();




//method overriding

// class Parent {
//   greet() {
//     console.log("Hello from Parent");
//   }
// }

// class Child extends Parent {
//   greet() {
//     console.log("Hello from Child");
//   }
// }

// let c = new Child();
// c.greet(); // Hello from Child




// class Parent {
//   constructor() {
//     console.log("Parent constructor called");
//   }
// }

// class Child extends Parent {
//   constructor() {
//     super(); // 👈 parent constructor runs first
//     console.log("Child constructor called");
//   }
// }

// let obj = new Child();



// const animal = {
//   eat() {
//     console.log("Animal eats food");
//   }
// };

// const dog = Object.create(animal); // 🐕 dog inherits from animal
// dog.bark = function() {
//   console.log("Dog barks");
// };

// dog.eat();  // ✅ comes from 'animal' (inherited)
// dog.bark(); // ✅ from 'dog' itself


//multiple inheritaance

// const CanFly = {
//   fly() { console.log("Flying high!"); }
// };

// const CanSwim = {
//   swim() { console.log("Swimming fast!"); }
// };

// class Animal {
//   eat() { console.log("Eating..."); }
// }

// class Duck extends Animal {}
// Object.assign(Duck.prototype, CanFly, CanSwim); // mixin

// const d = new Duck();
// d.eat();
// d.fly();
// d.swim();



// // Parent class
// class Person {
//   name = "Unknown";
//   age = 0;
//   country = "India";
// }

// // Child class
// class Student extends Person {
//   grade = "Not Assigned";
//   rollNo = 0;
// }

// // Create object
// const s1 = new Student();

// // set values
// s1.name = "Anjana";
// s1.age = 20;
// s1.country = "India";
// s1.grade = "BSc";
// s1.rollNo = 21;

// // print all details
// console.log("Name:", s1.name);
// console.log("Age:", s1.age);
// console.log("Country:", s1.country);
// console.log("Grade:", s1.grade);
// console.log("Roll No:", s1.rollNo);



// class Person {
//   name = "Anjana";
//   age = 20;
//   country = "India";

//   show()
//   {
//      console.log(this.name);
//   }
// }
// let s1=new Person()
// s1.show() 


// class Person {
//   name = "Anjana";
//   age = 20;
//   country = "India";
// }

// class Student extends Person {
//   grade = "BSc";
//   rollNo = 21;

//   // 👉 here 'this' works because it's inside a method
//   show = () => {
//     console.log("Name:", this.name);
//     console.log("Age:", this.age);
//     console.log("Country:", this.country);
//     console.log("Grade:", this.grade);
//     console.log("Roll No:", this.rollNo);
//   };
// }

// const s1 = new Student();
// s1.show(); // ✅ only one line to display all



//exception handling


// console.log("first");

// b=10
// console.log(b/0);
// // console.log(datas);

// console.log("last");





// console.log("start");
// try{
//   a=10;
//   // console.log(a/0);
//   console.log(data);
// }
// catch(e)
// {
//   console.log(e);
  
// }
// finally{
//   console.log("finally block executed");
  
// }
// console.log("end");



//callback hell

// function getuser(callback)
// {
//   setTimeout(()=>{
//             console.log("fetched user");
//             callback({id:1,name:"anjana"})
            
//   },2000)
// }

// function getposts(userid,callback)
// {
// setTimeout(()=>{
//             console.log("fetched post");
//             callback([{id:101,title:"palakkad"}])
            
//   },2000)
// }
// function getcomment(postid,callback)
// {
// setTimeout(()=>{
//             console.log("fetched comment");
//             callback(["nice work","amazing"])
            
//   },2000)
// }

// getuser(function(user)
// {
//  getposts(user.id,function(posts){
//   getcomment(posts[0].id,function(comment)
//  {
//   console.log(comment);
  
//  })
//  })
// })



//promise

// const promise=new Promise((resolve,reject)=>{

//   // const success=false
//   const success=true
//   if(success)
//   {
//     resolve("promise resolved")
//   }
//   else{
//     reject("error")
//   }
// })

// promise.then((message)=>
// {
//   console.log(message);
  
// })
// .catch((error)=>{

//   console.log(error);
  
// })



//promise chaning

// const promise=new Promise((resolve,reject)=>{

//   // const success=false
//   const success=true
//   if(success)
//   {
//     resolve("promise resolved")
//   }
//   else{
//     reject("error")
//   }
// })

// promise.then((message)=>
// {
//   console.log(message);
//   return "second promised"
  
// })
// .then((message)=>{
//   console.log(message);
  
// })
// .catch((error)=>{

//   console.log(error);
  
// })





// function loginUser(username,password)
// {
//  return new Promise((resolve,reject)=>{

  
//   setTimeout(()=>{

//     if(username=="anjana" && password=="abc123")
//     {
//       resolve("login successed")
//     }
//     else{
//       reject("login fail")
//     }

//   },2000)

// })
// }

// loginUser("anjana","abc123").then((message)=>{

//   console.log(message);
  
// })
// .catch((error)=>{

//   console.log(error);
  
// })

// let a=10;
// let a=40;
// console.log(a);


// class Parent {
//   constructor() {
//     this.surname = "Menon";
//   }
// }

// class Son extends Parent {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

// class Daughter extends Parent {
//   constructor(name,age) {
//     super();
//     this.name = name;
//     this.age=age;
//   }
// }

// const s = new Son("Akhil");
// const d = new Daughter("Anjana",20);

// console.log(s.surname); // Menon
// console.log(d.surname); // Menon
// console.log(s.name);
// console.log(d.name);
// console.log(d.age);
// console.log(s.age);



// const Student = {
//   study() {
//     console.log("Studying...");
//   }
// };

// const Athlete = {
//   play() {
//     console.log("Playing sports...");
//   }
// };

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// // Merge multiple objects into one prototype
// Object.assign(Person.prototype, Student, Athlete);

// const p = new Person("Anu");
// p.study(); // Studying...
// p.play();  // Playing sports...
// console.log(p.name);



// First parent
// const Cleaner = {
//   clean() {
//     console.log("🧹 Cleaning the room...");
//   }
// };

// // Second parent
// const Cook = {
//   cook() {
//     console.log("🍳 Cooking food...");
//   }
// };

// // Child class (inherits both)
// class SmartRobot {
//   speak() {
//     console.log("🤖 Hello! I am your smart robot.");
//   }
// }

// // Mix both parents into SmartRobot’s prototype
// Object.assign(SmartRobot.prototype, Cleaner, Cook);

// // Create instance
// const robot = new SmartRobot();

// robot.speak(); // from SmartRobot
// robot.clean(); // from Cleaner
// robot.cook();  // from Cook





// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, I’m ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, grade) {
//     super(name); // calls Person’s constructor
//     this.grade = grade;
//   }

//   greet() {
//     super.greet(); // call parent method
//     console.log(`I’m in grade ${this.grade}`);
//   }
// }

// const s = new Student("Anjana", 10);
// s.greet();

// Output:
// Hello, I’m Anjana
// I’m in grade 10


// class Student{

//   constructor()
//   {
//      this.name = "";  
//     this.mark = 0;
//   }
//   getName()
//   {
//     return this.name;
//   }
//   setName(name)
//   {
//     this.name=name;
//   }
//   getMark()
//   {
//     return this.mark;
//   }
//   setMark(mark)
//   {
//     this.mark=mark;
//   }
// }
// var std=new Student();
// std.getName("anu")
// std.getMark(45)
// console.log(std.getName()+" "+std.getMark());




//regular expression

// function isValidEmail(email) {
//   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return regex.test(email);
// }

// // Test it
// console.log(isValidEmail("john.doe@example.com")); // true  
// console.log(isValidEmail("wrong-email@"));          // false  



// function isValidPhone(phone) {
//   // This allows optional parentheses around area code, and - or . or / as separators
//   const regex = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/;
//   return regex.test(phone);
// }

//  // Test it
// console.log(isValidPhone("(123).456.7890")); // true  
// console.log(isValidPhone("(123).456.7890")); // true  
// console.log(isValidPhone("123-456-7890")); // true  



const email = "alice@example.com";
const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;


if (email.match(emailRegex)) {
  console.log("Valid email");
} else {
  console.log("Invalid email");
}
