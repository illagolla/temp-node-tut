const names = ['james', 'jess', 'lily', 'sevy']

/*
function myForEach(arr, callBackFunction) {
    for (let i=0; i<arr.length; i++) {
        const element = arr[i]
        callBackFunction(element)
    }
}

myForEach(names,function callBackFunction(name) {
    console.log(name)
})
*/

const myForEach = (arr,callBackFunction) => {
    for(let i=0; i<arr.length; i++){
        const element = arr[i]
        callBackFunction(element)
    }
}

/*
myForEach(names, callBackFunction = (name)=>{
    console.log(name)
})
*/

myForEach(names, (name)=>{
    console.log(name)
})