// 1)Variable

// let x=10;
//  console.log(X);     //X is not defined

// let a=5+ +"5";
// console.log(a);    //10

// let a=5+"5";
// console.log(a);    //55

// let a=5-"5"
// console.log(a);      //0


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



// 3)loop

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


for(i=1;i<=5;i++){

    for(j=1;j<=i;j++){

    console.log(i);                 //1 22 333 4444 55555
    
    }
}

