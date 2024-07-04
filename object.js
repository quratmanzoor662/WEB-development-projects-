//objects  object singleton & object literals 
// object literals 
const key =Symbol("mykey1")
const objects={
    "name" :"saima ",
    age:18,
    [key]:"mykey1",
    email:"quratmanzoor662@gmail.com",

}
// console.log (objects.age)
// console.log(objects["name"])
// console.log(objects["email"])
// console.log( objects.email)
// console.log(objects[key])
// objects.name="qurat"
// console.log(objects["name"])
// object.freez(objects)// after this we cant change any value 
// let we add some functions at value place 
// objects.fntn = function(){
//     console.log(" value = funtion ")
// }
// console.log(objects.fntn())
// objects.fntntwo = function(){
//     console.log(` value = funtion, ${ this. name } `)
// }
// console.log(objects.fntntwo())
// new object  singleton 
// const tinderUser= new object()
const tinderUser={}
tinderUser.id="123bac"
tinderUser.name="sammy "
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// nested objects 
const regularUser ={
    emai: "something@gmail.com",
    fullName:{
        firstName: "qurat ul ",
        lastName :" manzoor"
    }
}
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.firstName)
// combine objects 
  const obj1={1:"a",2:"b",3:"c"}
  const obj2={4:"d",5:"e",6:"f"}
//   const obj3= Object.assign({}, obj1,obj2)
 const obj3={ ...obj1,...obj2}
//   console.log(obj3)
// we can find the keys  and values separatly 
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// // de-structure of objects 
const course={
    courseName : "JS in hindi ",
    courseprice :"999",
    courseinstructor:"hitesh"
}
// course.courseinstructor      // as it is a long process  
// const{courseinstructor}= course
// we can chnage the name of the key as 
const{courseinstructor : instructor}= course

console.log(instructor);
// JSON  is  an object but with out object name 
// {
//     name :"qurat",
//     coursename: "",
// }
 // or  can be like array 
//  [
//     { },
//     { },
//     { },
//  ]