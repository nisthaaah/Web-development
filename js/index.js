
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async() =>{
    let response = await fetch("https://cat-fact.herokuapp.com/facts")
    console.log(response);
    let data = await response.json();

    const randomIdx = Math.floor(Math.random() * 5) + 1;
    factPara.innerText = data[randomIdx].text;
}

    btn.addEventListener("click", getFacts);




// const vow = (str) => {
//     let count = 0;
//     for(let s of str){
//         if(s === "a" || s === "e" || s === "i" || s === "o" || s === "u"){ //of for chars and in for indices
//             count++;
//         }
//     }
//     return count;
// }

// function sq(){
//     let arr = [1, 2, 4, 3];

//     arr.forEach((val) =>{
//         console.log(val * val);
//     })
// }

// function stu(){
//     let arr = [90, 99, 91, 89, 11];

//     let newArr = arr.filter((val) => {
//         return val > 90;
//     });

//     console.log(newArr);
// }

// function reduce(n){
//     let arr = [];
//     for(var i = 1; i <= n; i++){
//         arr[i-1] = i;
//     }

//     const res1 = arr.reduce((prev, curr) =>{
//         return prev + curr;
//     });
//     console.log(res1);

//     const res2 = arr.reduce((prev, curr) =>{
//         return prev * curr;
//     });
//     console.log(res2);
// }

// reduce(5);

// function getData(id){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("data", id);
//             resolve("done");
//         }, 2000)
//     }
// )}

// async function get() {
//     await getData(1);
//     await getData(2);

// }




// let getP1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1")
//             resolve("success");
//             //reject();
//         }, 3000);
//     })
// };

// let getP2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2")
//             resolve("success");
//             //reject();
//         }, 3000);
//     })
// };

// console.log("fetching data1.....")
// let p1 = getP1();
// p1.then((res) => {
//     //console.log(res);
//     console.log("fetching data2.....")
//     getP2().then((res) => {
//         console.log(res)
//     })
// })



// function getData(dataId, nextData) {
//     setTimeout(() => {
//         alert("data", dataId);
//         if (nextData) {
//             nextData();
//         }
//     }, 2000);

// }

// getData(1, () => {
//     getData(2, ()=>{
//         getData(3)
//     });
// });
