function getMoney(){
   return new Promise((resolve,reject)=>{
    // resolve(5000)
     reject("cannot give money")
   })
return 5000
}

function buyIcecream(amount){
    console.log("icecream bought using: " + amount)
}

async function main(){
    try{
    const res= await getMoney()
    buyIcecream(res)
    }
    catch(err){
        console.log(err)
    }
}

main()