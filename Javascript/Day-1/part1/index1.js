function f1(){
    const email= document.getElementById("email").value
    const password= document.getElementById("password").value
    if(email==="john@gmail.com" && password=== "1234"){
        alert("welcome")
    }
    else alert("access denied")
}