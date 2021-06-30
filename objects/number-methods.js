let num = 123.567
x = Number.NEGATIVE_INFINITY

console.log (num.toFixed ())
console.log (Number.isInteger (num))
console.log (Number.parseFloat (num))
console.log (Number.parseInt (num))

console.log (Math.ceil (num))

console.log (Math.random ())
console.log (Math.trunc (num))


console.log ()

let upper = 20
let lower = 10

let rand = Math.floor ((upper - lower + 1) * Math.random () + lower) // 10 + 10 * 0 - 0.99999  Math.random ()
console.log (rand)

// chllenge
let guess = function (guessNum, lower = 0, upper = 10){
    let randomNumber = Math.floor ((upper - lower + 1) * Math.random () + lower)
    if (guessNum == randomNumber) {
        return {
            result: true,
            randomNumber: randomNumber
        }
    } else {
        return {
            result: false,
            randomNumber: randomNumber
        }
    }
}
answer = guess (3, 0, 5)
console.log (`Answer is ${answer.result} and random number is ${answer.randomNumber}`)