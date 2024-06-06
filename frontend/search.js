const searchInput = document.getElementById('search')
const query = new URLSearchParams(window.location.search)
const searchParam = query.get('search')

if (searchParam != null && searchParam != ''){
    searchInput.value = searchParam
}

searchInput.addEventListener('keypress', (e) => {
    if (e.key == 'Enter')
        goSearch()
});

document.getElementById('search-btn').addEventListener('click', () => {
    goSearch()
});

function goSearch() {
    if (searchInput.value == '') return;

    window.location.href = `./index.html?search=${searchInput.value}`
}
