// create array of objects{name, age} and print only those names whose age is >=18. 

let obj1 = {name: "Abhi", age: 19}
let arr = [obj1, {name: "Anu", age: 17},{name: "Kumar", age: 49}, {name: "pankaj", age: 11}, {name: "Sita", age: 18}]

for(i = 0; i<arr.length; i++){
//    console.log(i , arr[i])
   let t = arr[i] 
    if(t.age >= 18){
   console.log(t.name)
    }
}

