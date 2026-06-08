const obj = {a:10, b:30}
const newobj = {...obj, b:25}
console.log(newobj) //overriding concept

const products = [
  { id:1, name: "Laptop", price: 75000 },
  { id:2, name: "Desktop", price: 25000 },
  { id:3, name: "Keyboard", price: 1000 },
];
// const newArr = products.map((product)=> ({...product}))
// console.log(newArr)

// const newArr = products.map((product)=>({...product, price:product.price+500}))
// console.log(newArr)

const newArr = products.map((product)=> product.id===2 ? ({...product, price:product.price+500}) : product)
console.log(newArr)