function add(...arr){
    return arr.reduce((sum,element)=>sum+element,0)
}

const result = add(4,5,7,7,8,6)
console.log(result)