let obj = {
    head : {
        data: 10, 
        next: {
            data: 20, 
            next: {
                data: 30,
                next: {
                    data: 40,
                    next: {
                        data: 50,
                        next: null
                    }
            }
        }
    }
  }
}
// console.log(obj.head.data)
// console.log(obj.head.next.data)

let temp = obj.head
while(temp != null){
   console.log(temp.data)
   temp = temp.next
}
// console.log(obj.head.next.next)


// add a new object at position 3 {data: 25, next: null}
// delted the newley added value






