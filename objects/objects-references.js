let account = {
    name: 'Ahrooran R',
    income: 0,
    expense: 0
}

let addExpense = function (account, amount){
    account.expense += amount
}

let addIncome = function (account, amount){
    account.income += amount
}

let resetAccount = function (account){
    account.expense = 0
    account.income = 0
}

let getSummary = function (account){
    balance = account.income - account.expense
    console.log (`Account for ${account.name} has $${balance}.`)
    if (balance !== 0){
        console.log (`$${account.income} in income and $${account.expense} in expense`)
    }
}

addIncome (account, 6000)
addExpense (account, 200)
addExpense (account, 350)
getSummary (account)
resetAccount (account)
getSummary (account)