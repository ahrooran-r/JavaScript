// let notes = [{
//     title: 'My next trip',
//     body: 'I would like to go to Spain',
// }, {
//     title: 'Habits to work on',
//     body: 'Excersice, eaing a bit better',
// }, {
//     title: 'Office modification',
//     body: 'got a new seat',
// }]

let notes = getSavedNotes ()

const filters = {
    searchText: ""
}
renderNotes (notes, filters)

document.querySelector ("#search").addEventListener ("input", function (event){
    filters.searchText = event.target.value.trim ()
    renderNotes (notes, filters)
}) 

document.querySelector ("#name-form").addEventListener ("submit", function (event){
    event.preventDefault ()
    console.log (event.target.elements.firstName.value)
    event.target.elements.firstName.value = ""
})

document.querySelector ("#filter-options").addEventListener ('change', function (event){
    console.log (event.target.value)
})