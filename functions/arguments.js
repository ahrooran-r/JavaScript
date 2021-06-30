let add = function (a, b){
    return a + b
}

let printScore = function (name = 'John Doe', score = 'Bronze V'){
    return 'Name is: ' + name + '\n' + 'Score is: ' + score
}

let result = printScore (undefined, 'Platinum III')
console.log (result)

let getTip = function (total = 100, tipPercent = 0.05){
    return 'TipAmount = ' + total * tipPercent + 'rupees'
}
console.log (getTip (tipPercent = 5))