const arr=[12, 15, 14, 16, 17, 18, 10, 15]
arr.forEach(element=>{
    console.log(element);
})
faceArr=arr.map(ele=>{
    return ele*3/2;
})
console.log(...faceArr);
filArr=arr.filter(ele=>ele%2==0);
console.log(...filArr);
let res=filArr.reduce((acc, sum)=>sum+=acc);
console.log(res)
//
function sum(a, b){
    disp(a+b);
}
function disp(a){
    console.log(a);
}
sum(69, 420);