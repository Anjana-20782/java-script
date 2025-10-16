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

// console.log(String(a));  //55



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

let x=1
function myFunction(){

    console.log("aliyooooooo......");       
    if(x<5)
    {
        x++
        myFunction()
    }
    
}
myFunction()











