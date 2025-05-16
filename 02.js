// without moving the positions of the console log, use promises and timeouts to make te output in order 1,2,3,4

new Promise ((resolve) => {
    resolve()
}).then(() => {console.log(2)})

Promise.resolve().then(() => {console.log(3)})

setTimeout(() => {
    console.log(4);
}, 0)

console.log(1);