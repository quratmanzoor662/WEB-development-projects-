// funtions are the block of code that perform a specific taask ...
// reduce redundency 
// function parameter(used at funtn definatin )  && function argument ( used at function call)
 function myFunction(msg)// parameter 
 {console.log (msg);

 }
myFunction("i love coding ");// argument 
// cal sum 
function sum(a,b)
{
   s=a+b;
   console.log("before return ");
   return s;
   console.log(" after ");// will not be printed 
}
 console.log(sum(1,2));
function mul(a,b)
{
    return a*b;

}
 console.log(mul (1,2));
 let val= sum(3,4);
//  console.log(a);  will not be printed =>a has block scope it will not be printed outside the function block 
 console.log(val);
 // arrow funtion  function ko variable me store krte hai  --- to execute 
 //used for small code 
const arrowmul = (a,b)=>{
    //  console.log(a*b)
      return a*b;
}
// arrowmul(3,3);
 console.log(arrowmul(3,3));

//  function vowel( str)
//  {  {for(const char of str)
//     console.log(char ) }



//     let count =0;
    

//      for(const char of str)
     


//      {
//          if (char =="a"|| char =="e"||char =="i"|| char =="o"||char =="u")
//         {  count++; }
//      }
//      return count ;

//  }
//   console.log(vowel("hellow") +" no. of vowels are present in the given string ");
   

   const vowels=(str )=>
   {
     for (char of str )
     {
        console.log( char);
     }
    let count =0;
     for(const char of str)
     {
         if (char =="a"|| char =="e"||char =="i"|| char =="o"||char =="u")
        {  count++; }
     }
     return count ;
   }
 
console.log ( vowels("asmat"));
