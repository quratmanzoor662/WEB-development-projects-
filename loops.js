//starting with loops
//print 1 to 5
for (let i=1;i<=5;i++)
{
    console.log("practice beta ");
}

//calculate sum of 1 to 5
let sum =0;
// let n=8
// for (let i=1;i<=n;i++)
// {
//     sum = sum + i;
// }
// console.log("sum = " , sum);
// console.log("loop has ended");
// for (let i=1;i<=5;i++)
// {
//     console.log("i= ",i);
// }
//while loop
//let i=1
// while (i<11)
// {
// console.log("i=",i);
// i++
// }
// // do while loop 
// j=9
// do {
//     console.log("j=",j)
//     j++
// }
// while(j<11)
// another two types of loops  { for-of || for-in}
// these help us in iteration of some special data types
// used to print the string and arrays not for objects  indexes one by one
// let str="qurat ul manzoor"
// for (let i of str)
// {
//     console.log("i=",i)
// }

// let size=0

// for (let i of str)
// {
//     console.log("i=",i)
//     size++;
// }
// console.log("string size =",size);
// for-in is used to print  keys in an object 
let student=
{ name:"salma jabeen",
age:24,
cgpa:8.9,
ispass:true,
};
for(let  key in student)
{
    console.log("key is = ",key ,", value =" ,student[key]);
}
//print all numbers 

// for ( let int=0;int<=100;int++)
// {
//     console.log(int);
// }
// print all even no,s from 0 to 100
for ( let int=0;int<=20;int++)
{
    if (int%2==0)
    {
        console.log(int ," is even no.");
    }
    // else {
    //     console.log( int, " is not even")
    // }
    
}
let gameNum=13;
let userNum=prompt("Guess the game no.");
while(userNum !=gameNum)
{
    userNum= prompt(" you entered wrong gamenumber . GUESS AGAIN");
}
    console.log("you guess the correct number");
/// strings
let str="salma jabeen "
 let str2='qurat'// create str
str.length//lengeth of string
str[0],str[1];//index of sting
console.log(str[2],str[3],str[4])
// TEMPLATE LITERALS : a way to have embedded expression in strings
 let spclstr=`this is a template literal`//``backticks 
 console.log( typeof spclstr);
 //eg 
 let obj={
    item :"lipstick",
price :400,
color:"marron",
 };
 //print the details in one line 
 console.log("the cost of ",obj.item,"is ",obj.price,"rupees");
// combine them in single string // use the template litrals
let output =`the cost of ${obj.item}  with color ${obj.color} is ${obj.price} rupee`;
console.log(output);
// ${}--> string interpolation// doning substitution of placeholders
 spclstr=`this is a template literal ${1+2+3}`
 console.log(spclstr);
//escape character \n,\t
 spclstr=`this is a \t template literal`
 console.log(spclstr);
 // string methods:
 let str4="qurat ul manzoor" 
str5=str4.toUpperCase()
 console.log(str5);
  str6=str4.toLowerCase()
 console.log(str6)
 // trim() remove white spaces int starting and end
 str7="    my name is       qurat     manzoor            " 
 console.log(str7.trim ())
  console.log(str.slice( 2,5));//return a part of stsring 
 //concatinate :-  combine two strings 
  let str8 ="concatinate ";
  let str9="  two strings  ";
  let concat=str8.concat(str9);
  console.log( concat);
  let res = str8 + str9;
  console.log(res); // concatinate  two strings
  let str10 = "qurat ul manzoor "
  console.log(str10);
  console.log(str10.replace("q","Q"));//Qurat ul manzoor
  console.log(str10.replace("a","aa"));//Quraat ul manzoor
  // char at any index value
  console.log(str10.charAt(3));//a
  //or
console.log(str10[3]);//a
str10[0]="m";
console.log(str10);// expected output "murat ul manzoor" but strings are immutable 
//it will print the original string qurat ul manzoor
// for change we will use replace method 
let fullName = prompt("enter your full name ")
console.log(fullName.trim ());
 let userName= "@" + fullName + fullName.length
 console.log(userName)
