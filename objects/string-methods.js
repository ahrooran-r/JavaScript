let name = 'Ahrooran Ravindran'

console.log (name.length)

console.log (name.toUpperCase())

console.log (name.toLowerCase())

let password = 'abc123pasfsword@#'
console.log (password.includes ('password'))

console.log (name.sub ())

console.log (name.indexOf ('r'))

console.log (name.replace ('Ahroran', 'Arabi'))

let bool = true
console.log (bool)
console.log (bool.toString ())

// challenge
let isValidPassword = function (string){
    return string.length > 8 && !string.includes ('password')
}
console.log ()
console.log (isValidPassword (password))

console.log (name.split ('n'))