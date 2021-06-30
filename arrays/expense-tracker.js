const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [],

    addExpense: function (desc, amt){
        this.expenses.unshift ({
            description: desc,
            amount: amt
        })
    },

    addIncome: function (desc, amt){
        this.income.unshift ({
            description: desc,
            amount: amt
        })
    },

    getAccountSummary: function (){
        let totalExpenses = 0
        let totalIncome = 0
        
        this.expenses.forEach(function (expObj){
            totalExpenses += expObj.amount
        })

        this.income.forEach(function (incObj){
            totalIncome += incObj.amount
        })
        console.log (`The total amount you have right now ${totalIncome - totalExpenses}$`)
    }
}

account.addExpense ('Rent', 950)
account.addExpense ('Coffee', 2)
account.addIncome ('Job', 1000)
account.getAccountSummary ()
console.log (account)