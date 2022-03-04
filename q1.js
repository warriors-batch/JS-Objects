// Take two objects and return a new object with the properties of both objects.

function mergeObj(obj1, obj2){
//    let obj3 = {...obj1, ...obj2}
let obj3 = {}
for(let key1 in obj1){
    obj3[key1] = obj1[key1]
}
for(let key2 in obj2){
    obj3[key2] = obj2[key2]
}
   return obj3
}
console.log(mergeObj({name: "Abhishek", age: 25}, {name: "Abhishek", phone: "+91-7904421580"}))
