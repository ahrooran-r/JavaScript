let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let printFunc = function (book){
    console.log (`The name of book is '${book.title}'. It has ${book.pageCount} pages. It was written by ${book.author}`)
}

printFunc (myBook)
printFunc (otherBook)

//////////////////////////////////////////////////////////
let convert_1 = function (farenheit){
    return {
        celsius: 5 / 9 * (farenheit - 32), 
        kelvin: 5 / 9 * (farenheit - 32) + 273
    }
}

let convert_2 = function (farenheit){
    let celsius =  5 / 9 * (farenheit - 32)
    let kelvin =  celsius + 273
    return {
        celsius: celsius, 
        kelvin: kelvin
    }
}

let answer = convert_2 (32)
console.log (answer.celsius)
console.log (answer.kelvin)