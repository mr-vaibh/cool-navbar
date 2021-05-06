let searchBox = document.getElementsByClassName("searchbox")[0]
let searchExtras = document.getElementsByClassName("search-extras")[0]

// If text is clicked
searchExtras.addEventListener('click', (e) => {
    searchBox.focus()
    searchExtras.hidden = true
})

// If focus is made without clicking text
searchBox.addEventListener('focus', (e) => {
    searchExtras.hidden = true
})

// If focus is removed
searchBox.addEventListener('focusout', (e) => {
    if (e.target.value == "") {
        searchExtras.hidden = false
    }
})