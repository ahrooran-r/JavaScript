let todos = [{
    title: 'Study arrays in js',
    isFinished: true
}, {
    title: 'Exerise for 30 min',
    isFinished: false
}, {
    title: 'Eat dinner',
    isFinished: false
}, {
    title: 'Drink water',
    isFinished: true
}, {
    title: 'Play pubg',
    isFinished: false
}]

//display todos
const displayTodos = function (todos){
    document.querySelector ("#all-todos").innerHTML = ""

    todos.forEach (function (todo){
        const todoTitle = document.createElement ("p")
        todoTitle.textContent = todo.title
        document.querySelector ("#all-todos").appendChild (todoTitle)
    })
}

displayTodos (todos)

// search function
const search = function (todos, query){

    //check box value
    document.querySelector ("#checkbox").addEventListener ("change", function (event){
        const isChecked = event.target.checked
    })

    if (query.length !== 0) {
        const searchResult = todos.filter (function (todoObject){
            return (todoObject.title.toLowerCase ().includes (query.toLowerCase ()))
        })
    
        document.querySelector ('#search-space').innerHTML = ''
    
        searchResult.forEach(function (resultObject) {
            const result = document.createElement ('p')
            result.textContent = `${resultObject.title} (${resultObject.isFinished})`
            document.querySelector ('#search-space').appendChild (result) 
        })
    } else {
        document.querySelector ('#search-space').innerHTML = ''
    }
}

document.querySelector ('#search-todo').addEventListener ('input', function (event){
    const query = event.target.value.trim ()
    search (todos, query)
})

document.querySelector ("#add-todo").addEventListener ("submit", function (event){
    event.preventDefault ()
    todos.push ({
        title: event.target.title.value.trim (),
        isFinished: false
    })
    displayTodos (todos)
    event.target.title.value = ""
})