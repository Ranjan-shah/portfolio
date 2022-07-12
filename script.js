// let data = {
//     name:"ranjan" ,
//     class:5,
//     address:'ktm'
// }
// function getName(data){
//     return data.name;
// }
// console.log(getName(data))

// let a=[1,2,3];
// function doublea(arr){
//     let doublearr=[];
//     for(let i=0;i<arr.length;i++){
//         doublearr.push(arr[i]*2);
//     }
//     return doublearr;
// }
// console.log('double', doublea([1,2,3]));

// let a=[1,2,3];
// const doublea=(arr)=>{
//     let doublearr=[];
//     for(let i=0;i<arr.length;i++){
//         doublearr.push(arr[i]*2);
//     }
//     return doublearr;
// }
// console.log(('double', doublea(a)));

let a=[1,2,3];
a.map((val,index)=>{
    console.log(val,index);
})