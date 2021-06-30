const todos = [{
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

const deleteTodo = function (array, title){
    const index = array.findIndex (function (value){
        return value.title.toLowerCase () === title.toLowerCase ()
    })

    if (index !== -1){
        const deletedTodo = array.splice (index, 1)
        console.log (`Todo ${title} is successfully deleted`)
    } else {
        console.log (`No todo object found with title ${title}`)
    }
}
// deleteTodo (todos, 'drink water')
// console.log (todos)

const finishedTasks = function (todos){
    return todos.filter (function (todoObj){
        return todoObj.isFinished
    })
}
// console.log (finishedTasks (todos))

const arrange = function (todos){
    todos.sort (function (a, b){
        if (a.isFinished == false && b.isFinished == true) return -1
        else if (a.isFinished == true && b.isFinished == false) return 1
        else return 0
    })
}
arrange (todos)
console.log (todos)