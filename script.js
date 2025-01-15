// script.js
function search() {
    const searchBar = document.getElementById('search-bar');
    const query = searchBar.value.trim();

    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert('Please enter a search term!');
    }
}
