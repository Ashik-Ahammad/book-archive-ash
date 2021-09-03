const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    for (const book of books) {

    }
}