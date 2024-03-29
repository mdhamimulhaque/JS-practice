//=========== callBack-higherOrderFunction ==============

// const square = (x) => {
//     console.log(`square of ${x} = ${x * x}`)
// };


// const higherOrderFunction = (num, callback) => {
//     callback(num)
// }

// higherOrderFunction(6, square)

// ----------- when we use a function inside a function as a "parameter / argument " ===> this parameter we received as a function & we call that parameter "callback function"

// --------- which function received a callback function that is called "higher order function"
//---------- when a function received a function as a argument(parameter) we called it higher order function


// ----------- callback function ------

const task1 = (callback) => {
    console.log("task 1 done");
    callback()
}

const task2 = (callback) => {
    setTimeout(() => {
        console.log("task 2 done");
        callback()
    }, 3000);
}

const task3 = (callback) => {
    console.log("task 3 done");
    callback()
}

const task4 = (callback) => {
    console.log("task 4 done")
    callback()
}

const task5 = (callback) => {
    setTimeout(() => {
        console.log("task 5 done");
        callback()
    }, 5000);
}

const task6 = () => {
    console.log("task 6 done")
}


// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 task5(() => {
//                     task6()
//                 })
//             })
//         })
//     });
// })




// ==============================================================================
// ============================= call back function =============================
// ==============================================================================

const higherOrderFunction = (callBackFunction, name) => {
    callBackFunction(name) //-------> callback function call
}



// ---> function 1
const morning = (name) => {
    console.log("Good Morning", name)
}
// ---> function 1
const evening = (name) => {
    console.log("Good Evening", name)
}
// ---> function 1
const night = (name) => {
    console.log("Good Night", name)
}


higherOrderFunction(morning, "Himel")
higherOrderFunction(morning, "Tamal")
higherOrderFunction(evening, "Tamal")
higherOrderFunction(night, "Tamal")



// !====== we use use document.get......addEventListener(click,()=>{})  ---> here anonyms function is also call-back function