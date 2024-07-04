// array collection of difrnt types of items 
let marks =[96,95,78,56,88];
console.log(marks); //[96,95,78,56,88]
console.log(marks.length);//property
// indices  plural form of index
// aray is itself an object type 
console.log(marks[0],marks[1]);//96,95
// arrays are mutable  we can  change the originsl value of array 
marks[0]=66;
console.log(marks)//[66,95,78,56,88]
//looping in arr
arr1=[1,2,3,4,5,6,7,8];
// for(let index=0;index<=arr1.length;index++)
// {
//     console.log(arr1[index]);

// }
//for of 
for (let index of arr1)
{
    console.log(index);

}
let sum =0
for (let val of marks )
{
  sum = sum +val ;
}
console.log(sum)
let avg = sum / marks.length;
console.log(avg)
console.log(`avg marks of the class =${avg}`)
// let avg=summ/marks.length
let items =[250,645,300,900,50];
let i=0;
for(let i=0;i<items.length;i++)
{
    let offer =items[i]/10;
    items[i]= items[i]-offer ;

    5
}
console.log(items)
//array methods 1) push (),2) pop(),3) toString(),4)concatinate (),5) unshift(),6) shift(),7) slice() ,8) splice( add ,remove, replace )

console.log(marks)
marks.push(12)
console.log(marks )
let deletedItem = marks.pop()
console.log("deleted marks" , deletedItem  );
console.log(marks)
console.log(marks.toString());// convert array into strng 
let concat= arr1.concat(marks);// combine two arrays 
console.log(`combining  two arrays arr and mmarks =${ concat} `)
// unshift  add element at the start 
// shift delete element at the start 
console.log(arr1.unshift(0));
console.log(arr1)
console.log(arr1.shift())
console.log(arr1 )
arr2=[10,11,12,13,14,15,16]
console.log(arr2.slice(1,5))
console.log(arr2.splice(1))

