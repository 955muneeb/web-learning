console.log("hell  i am conditinal statement if and else")


let a= prompt("enter your age")
a=Number(a)
if(a>30){
    // console.log("you are mature guy")
    // prompt("your are a mature boy")
    let b= document.getElementById("age")
    b.innerHTML="your are mature"
}
else if ( a<20){
   console.log("you are under 20")
}
else{
     console.log("you are above the 100")
}