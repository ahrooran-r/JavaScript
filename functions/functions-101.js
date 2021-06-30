let hello = function (){
    console.log ('Hello World!')
}

let square = function (number){
    return number ** 2
}

let convert = function (farenheit){
    return 5 / 9 * (farenheit - 32)
}
console.log (square (convert (39)))