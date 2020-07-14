const notes = [
    {title:'My next trip'},
    {title:'Habbits to work on'},
    {title:'Office modification'}
]

const filters = {
    searchText : ''
}

const renderText = function(notes, filters){
    const filteredArray = notes.filter(function(x){
        return x.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#division').innerHTML=''

    filteredArray.forEach(function (n){
        const oneNote = document.createElement('p')
        oneNote.textContent = n.title
        document.querySelector('#division').appendChild(oneNote)
    })
}
renderText(notes,filters)

document.querySelector('#myInput').addEventListener('input',function (e){
    filters.searchText = e.target.value
    renderText(notes, filters)
})

