
function delayFn(time){
    return new Promise((resolve) => setTimeout(resolve, time))
}

console.log('Promise starts')
delayFn(2000).then(() =>(console.log("Promise resolved after 2 sec")));
console.log("end")

function divideFunction(num1 , num2){
    return new Promise((resolve, reject)=> {
        if(num2 === 0){
            reject('Cannot divide by 0')
        }else{
            resolve(num1/num2)
        }
    })
}

divideFunction(10, 0)
    .then(result => console.log(result))
    .catch(error => console.log(error, 'err'))