 const user ={
     username :"sam",
     price : 999,
      welcomemsg : function (){
        console.log (`${ this.username }, wwellcome to website   `)
        console.log(this)// will print the current context of the function or block 

      }

 }
 user.welcomemsg()
 user. username =" saima "
  user.welcomemsg()
console.log(this)// will print{ } whuch means  empty object 

// function one() {
//     // console.log(this) // will  print something or can access funtions 
//     let username=" mehruuuu"
//     console.log(this.username)// will print undefined 
// }
//  one()
 //  at the end this cant be accessed by using simple function 

const  arrow =() =>{
    let username ="sam"
    console.log(this.username)
}
const onee = function() {
    let username=" mehruuuu"
    console.log(this.username)
} 
onee() //at the end this cant be accessed by using simple function 
const one = () =>{
    let username=" mehruuuu"
    console.log(this.username)//this cant be accessed by using arrow function
} 
one()



 /// arrow function  basic
 //syntax ()=>{} 
  const addtwoo =(num1,num2)=>{
    return num1+num2
  } 
  console.log(addtwoo(1,2))
//    implcit return arrow function  curly braces k sath return keyword likhna hota hai  lkin curly braces k begair nii likna hota hai 
// const addtwo =(num1,num2)=> num1+num2 //3
const addtwo =(num1,num2)=>( num1+num2)//3

  console.log(addtwo(1,2))
  const add=(num1,num2)=>({username:"qurat"})
 console.log( add())
