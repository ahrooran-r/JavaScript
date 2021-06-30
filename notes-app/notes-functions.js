// save notes in localStorage
const saveNotes = function (){
    localStorage.setItem ('notes', JSON.stringify (notes))
}

// reads existing notes from localStorage
const getSavedNotes = function (key = 'notes'){
    const notesJson = localStorage.getItem (key)
    if (notesJson.length !== null) return JSON.parse (notesJson)
    else return []
}

// prints text to browser
const printToBrowser = function (text, tag = '#notes'){
    const element = document.createElement ("p")
    if (text.title.length > 0) element.textContent = text.title
    else element.textContent = 'Unnamed Note'
    document.querySelector (tag).appendChild (element)
}

const renderNotes = function (notes, filters){
    const filteredNotes = notes.filter (function (note){
        return (note.title.toLowerCase ().includes (filters.searchText.toLowerCase ()))
    })
    document.querySelector ("#notes").innerHTML = ''
    filteredNotes.forEach (printToBrowser (note))
}

// render application notes
document.querySelector ('#create-note').addEventListener ('click', function (event){
    notes.push ({
        title: '',
        body: ''
    })
    saveNotes ()
    renderNotes (notes, filters)
})