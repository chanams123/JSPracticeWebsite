/* https://www.omdbapi.com/?s=fast&apikey=da22de3a */

const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')
const results = document.getElementById('results')

searchBtn.addEventListener('click', async function() {
    const query = searchInput.value;
    const response = await fetch (
        https://www.omdbapi.com/?s=fast&apikey=da22de3a
    );
    const data = await response.json();
    const filtered = data.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase))
);
results.innerHTML = ""
filtered.forEach(function(user) {
    results.innerHTML +=
    <div>
        <h3>${user.name}</h3>
        <p>${user.email}</p>
    </div>
    ;
});
});
