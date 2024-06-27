let a=2
let b=3
let c=a+b
console.log("a=",a,"  & b=" ,b)
console.log("a + b=", c)
console.log("a - b = ",a-b)
console.log("a * b = ",a*b)
console.log("a / b = ",a/b)
console.log("a ** b = ",a-b)//power b
console.log("a % b = ", a%b)
// unary operator
console.log("a-- =" ,a--)
console.log("a++ = ",a++)
console.log("--a= ", --a)
console.log("--b = ",--b)
console.log("b-- = ",b--)
console.log("b++ = ",b++)
// assignment operators
a *=4//a=a*4
console.log("a=",a)
a/=2
console.log("a=",a)
a+=2
console.log("a=",a)
a-=2
console.log("a=",a)
a**=2
console.log("a=",a)
//comparison operators
d=5//number
e="5"//string --> js auotomatically c0nvert A STRing into number  
console.log("d!=e",d!=e)
console.log("d==e",d==e)
console.log("d>=e",d>=e)
console.log("d<=e",d<=e)
//logical operators: &&,||,!
let f=6
let g=5
let cond1=f>g;
let cond2 = f==6;
console.log("cond1 && cond2 =",cond1 && cond2);//true
console.log("cond1 || cond2 =",cond1 || cond2);//
let cond3=f<g;
let cond4 = f==6;
console.log("cond3 &&cond4 =",cond3 && cond4);
console.log("!(f<b)=",!(f<b));
//conditional   statement
let age = "16"
if (age>=18)
{
    console.log("you can vote ")

}
else if(age<18)
{
    console.log("you cannt vote ")
}
else{
    console.log("you tell me your age")
}

let mode = "dark";
let color;
if (mode=="dark")
{
    color="black";
}
 else if(mode=="light")
{
    color="white";
}
else
{
    console.log("set mode");

}
console.log(color);
//ternary operator simpler ,compact if-else
age>=18?"adut":"not adult";//will not print any thing
let resut=age>=18?"adut":"not adult";
console.log(resut);
// print another way 
  age>=18? console.log("adult"):console.log("not adult")
 alert("hellow");//one time pop up message
prompt("helow")// also like alert but takes input from user 
  //let we store that value
let name =prompt("enter you name");
console.log(name);
//get user to input a number using prompt("enter a number"). check if the number is a multiple of 5 or not
let num = prompt("enter a number");
if (num%5==0)
{
    console.log("num is multiplied by 5 , num ==", num);

}
else{
    console.log("number is not multiple of 5 , num ==",num)
}
// write a code which can give grades to students according to their score
/*80-100=A
70-89=B
60-69=C
50-59=D
0-49=F  */
let marks =prompt("enter your marks");
if (marks>=80 && marks<=100)
{
    grade =" A";
}
else if (marks>=70 && marks<=89)
{
    grade = "B";
}
 else if (marks>=60 && marks<=69)
{
    grade = "C";
}
else if (marks>=50 && marks<=59)
{
    grade = "D";
}
 else if (marks>=0 && marks<=49)
{
    grade ="F";
}
else {
    grade = "enter your marks "
}
console.log(grade);

