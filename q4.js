// print all values of data


let clothes = {
    name: ["T-shirt", "Jeans", "Shirt", "Socks", "Shoes", "Jacket"],
    color: ["Red", "Blue", "Green", "Yellow", "Black", "White"],
}

function colorOfClothes(dress){
    let c_name = clothes.name
    for(let i = 0; i<c_name.length; i++){
        if(c_name[i] == dress){
            console.log(clothes.color[i])
        }
    }
}

colorOfClothes()