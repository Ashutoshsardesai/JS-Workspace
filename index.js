console.log("Hello")
let Add=(num1,num2)=>
{
    return num1+num2;
}
console.log(Add(2,3));
let changeText=()=>
{
    let header=document.getElementsByTagName("h3")[0].innerText="Changed text";
}
//let btn=document.getElementById("btn").addEventListener("click",changeText);


//Strings------------------------------------------------------------------------------------------------------------------------------------------------------------
var firstname="Ashutosh",lastname="Sardesai";
console.log(firstname+" "+lastname);
console.log("String length: ",firstname.length);

let nickName=firstname.slice(0,4);
console.log(nickName);
let firstNameCaps=firstname.toLocaleUpperCase();
console.log(firstNameCaps);
let arr=firstname.split("").forEach((item,index)=> //Seperates a string as an array of characters.
{
    console.log("Item : ",item,"Index: ",index);
});
// console.log(arr);
// console.log(firstname.indexOf("Ashu"));
let newName=firstname.replace("Ashu","Lawdu");
//console.log(newName)

let product="Earphones";
let price=2700;
let qty=3;
let inVoice=`You brought ${qty} ${product}s. Your total bill is ${qty*price}.`;
console.log(inVoice);


//Javascript Math object-------------------------------------------------------------------------------------------------------------------------------------------

console.log(Math.random());
//Generating a random integer in a given range
function generateRandInt(min,max)
{
    return Math.floor(Math.random()*(max-min)+min);
}
function changeColor()
{
    let r,g,b;
    r=generateRandInt(0,255);
    g=generateRandInt(0,255);
    b=generateRandInt(0,255);
    document.getElementById("header").style.backgroundColor=`rgb(${r},${g},${b})`;
}
//console.log(generateRandInt(1,10));

//JavaScript Arrays----------------------------------------------------------------------------------------------------------------------------------------------
//Array Declaration method 1
let arr1=[];
arr1.push(10);
arr1.push(120);
arr1.push(30);
arr1.push("Wassup");

//Array declaration method 2
let arr2=new Array();
arr2.push("Hey");
arr2.push("Hello");
arr2.push("World");

//Generate a dynamic HTML list from an array 
let cars=[
    "Honda City",
    "Toyota Corola",
    "Swift Dzire",
    "Scoda Rapid"
]
function generateDynamicList()
{
    let list=document.createElement("ul");
    let listItems=[];
    cars.forEach((item,index)=>
    {
        let caritem=document.createElement("li");
        caritem.innerText=`${item}`;
       list.appendChild(caritem);
    })
    return list;
}
document.getElementById("container").appendChild(generateDynamicList());
//console.log("Sending request ot server")
setTimeout(()=>
{
    //console.log("Hey there")
},4000)
let timer=setInterval(() => {
  //  console.log("Ill repeat");
}, 1000);
setTimeout(() => {
    clearInterval(timer)
}, 5000);
//console.log("Data saved on server")

// setTimeout(() => {
//     document.body.style.backgroundColor="red";
// setTimeout(() => {
//     document.body.style.backgroundColor="blue";

// setTimeout(() => {
//     document.body.style.backgroundColor="orange";
// }, 1000);
// }, 1000);
// }, 1000);

//Callbacks Demo-------------------------------------------------------------------------------------------------------------------------------------------------------
let  delayedColorChange=(newColor,delay,callback)=>
{
    setTimeout(() => {
        document.body.style.backgroundColor=newColor;
        callback && callback();
    }, delay);
}
delayedColorChange("red",1000,()=>
{
    delayedColorChange("blue",1000,()=>
    {
        delayedColorChange("yellow",1000,()=>
        {
            delayedColorChange("orange",1000)
        })
    })
})
//Promises-------------------------------------------------------------------------------------------------------------------------------------------------------------
const fakeReqCallBack=(url,success,failure)=>{
    const randInt=Math.random()*4500+500;
    setTimeout(()=>
    {
        if(randInt<1500)
        {
            success(`Request successfull!! Your URL: ${url}`);
        }
        else{
            failure("Oops!! Server timeout");
        }
    },randInt)
}
fakeReqCallBack("www.google.com",(successCode)=>
{
    console.log("Successfull",successCode);
},(failureCode)=>
{
    console.log("Failed to load",failureCode);
})

const fakeReqPromises=(url)