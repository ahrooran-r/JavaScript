let notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain',
}, {
    title: 'Habits to work on',
    body: 'Excersice, eaing a bit better',
}, {
    title: 'Office modification',
    body: 'got a new seat',
}]

const findNote_index = function (noteArray, noteTitle){
    const index = noteArray.findIndex (function (noteObject){
        return noteObject.title.toLowerCase () === noteTitle.toLowerCase ()
    })
    return noteArray [index]
}
// console.log (findNote_index (notes, 'office modification'))

const findNote_value = function (noteArray, noteTitle){
    return noteArray.find (function (noteObject, index){
        return noteObject.title.toLowerCase () === noteTitle.toLowerCase ()
    })
}
// console.log (findNote_value (notes, 'office modification'))

const filteredNotes = notes.filter (function (noteObject, index){
    return noteObject.title.includes ('ne')
})
// console.log (filteredNotes)

const order = function (notes){
    notes.sort (function (a, b){
        if (a.title.toLowerCase () < b.title.toLowerCase ()) return -1
        else if (a.title.toLowerCase () > b.title.toLowerCase ()) return 1
        else return 0
    })
}
order (notes)
console.log (notes)