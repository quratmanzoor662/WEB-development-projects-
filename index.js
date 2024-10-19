//1. ways to print in js
    //alert("mehru")
   // document.write("this is document write");
   //2.javascript console API
   console.log("this is mehru");
    console.warn("this is a warning");
    //console.error("this is an error");
    //3. js variables
    var num1=34;
    var num2=43;
    console.log(num1+ num2);
    //4. datatypes
    /*  at the very high level , there are two types of data types in js
    1. primitive: undefined , null,number, string, boolean,symbol,
    2.refrence data types : objects , arrays
    */
    //numbers
    var num1=34;
    var num2=43;
    //strings
    var str1= "this is a string";
    var str2= "this is another string ";
    // objects
    var marks={
        mehru:34,
        salma:44,
        andleeb: 89
    }
    //boolean
    var a= true;
    var b= false;
    //undefined
    //var und= undefined;
    var und;
    //null
    var n= null;
    // arrays
    var arr= [1,2,3,4,5,"helow"];
    // print the values
   // console.log(num1)
    //console.log(marks)
    //console.log(a,b,str1)
    // console.log(und)
    // console.log(n)
    // console.log(arr[3])
    //operations in JS
    //1. arthematic operators 
    var s=100;
    var t= 20;
    console.log("the value of s+t is ",s+t);
    // console.log("the value of s-t is ",s-t);
    // console.log("the value of s*t is ",s*t);
    // console.log("the value of s/t is ",s/t);
    //assignment operators
    var x= s;
    // x+=2;
    // x-=2;
    // x*=2;
    // console.log(x);
    // comparison operators 
    var c= 5;
    var d= 3;
    // console.log(c==d);
    // console.log(c>=d);
    // console.log(c>d);
    // console.log(c<d);
    // logical operators
    // console.log(true&&true);
    // console.log(true||true);
    // console.log(true&&false);
    // console.log(true||false);
    // console.log(!true);
    //functions 
    // simple fntn
    function avg(f,g)
    {
    r= (f+g)/2;
    return r;
    }
    c1=avg(3,4);
    c2= avg(2,3);
    // console.log(c1,c2);
    // conditional statement
    // var age = 24;
    // // var age =4
    // if ( age > 18)
    // {
    //     console.log(" you are not a kid" );
    // }
    // else{
    //     console.log(" you are kid ");
    // }
    // if else ladder
//      var age =19
//     if( age>32)
//     {    
//         console.log("abii bhi shadii nii kii hau bhadd me javou ");
//     }
//     else if(age>26)
//     {
//      console.log("ab shadii kr le ");
//     }
// else if (age >22)
// {
//  console.log("bandii doondle bhaii");
// }  
// else 
// {
//     console.log("padne ki umer hai beta padle")
// }
//iterations  loop
var arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr);
// for (var i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// // }
// arr.forEach (function(element)
// {
//     console.log(element);
// })
// while loop
let j=0;// let ko block level scope hota hai 
// const a=0//const value doesnot chnage not incremented
// while (j<arr.length)
// {
//     console.log(arr[j]);
//     j++;
// }
//do while 
// do{
//     console.log(arr[j]);
//     j++
// }
// while(j<arr.length);
// break statement
// for(var i=0;i<arr.length;i++)
// {
//      if (i==2)
//      {
//     //  break;
//     continue;
//  }
//     console.log(arr[i]);
// }
let myArr =["pen","camera","bag",34,null,true];
//Array methods
// console.log(myArr.length);
// myArr.pop()
// console.log(myArr);
// myArr.push("qurat");
// console.log(myArr);
// myArr.shift();// pehla element gayeb hota hai
// console.log(myArr);
// const newLen= myArr.unshift("qurat");
// console.log(newLen);
// console.log(myArr);
// string methods
let str="this is a string ";
// console.log(str.length);
// console.log(str.indexOf("is"));// returns the ist
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("is"));
// slice : part of string lega jaha tk hum bolai 
// console.log(str.slice(1,3));
//replace a string 
//  r=str.replace ("string ", "replaced string");
// console.log(r)
myDate=new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
//DOM:document object model
let elem = document.getElementById('click');
// console.log(elem);
let elemclass = document.getElementsByClassName("container");
// console.log(elemclass);
// elemclass[0].style.background ="yellow";
elemclass[0].classList.add("bg-primary");
// elemclass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);
// tn = document.getElementsByTagName('div');
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText="this is a created para"
// tn[0].appendChild(createdElement);
// createdElement2= document.createElement('b');
// createdElement2.innerText="this is a replaced  child element";
// tn[0].replaceChild(createdElement2,createdElement);
// removeChild(createdElement);
//selecting using query
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);
//events in js
// function clicked(){
//     console.log('the button was clicked')
// }
// window.onload= function(){
//     console.log('the documet was clicked')
// }
// firstContainer.addEventListener('click',function(){
//     console.log("click hua");
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log('mouse out of container');

// })
// firstContainer.addEventListener('mouseover',function(){
    // console.log('mouse on container');
// })
// let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log('mouse up when clicked on container');
// })
// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</"
//     console.log('mouse down when clicked on container');
// })
//arrow functions 
function sum(a,b)
{
   return a+b; 
}
// sum=(a,b)=>{
// return a+b;
// }
logkaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b> set interval fired</b>"
    console.log("i m your log")
}
//settimeout and setinterval
// setTimeout(logkaro,200);
// setInterval(logkaro,300);
// clr=setTimeout(logkaro,200)
// clr=setInterval(logkaro,300);
//use clearinterval (clr)/cleartimeout(clr) to cancel setinterval/set timout
//js localstorage
// localStorage.setItem('name','qurat')
// console.log(localStorage)
localStorage.removeItem('name')
localStorage.clear();
// json civert obj to string && string to object
//json accepts double quotes only
//  obj={name:"qurat",length:1 ,a:{this:"that"}}
//  jso=JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed=JSON.parse({"name":"qurat","length":1,"a":{"this":"that"}})
// console.log(parsed);

//ECMA script
//template literals- backticks
