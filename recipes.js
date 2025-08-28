const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const recipeCards = document.querySelectorAll('.recipe-card');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    recipeCards.forEach(card => {
        const title = card.querySelector('.recipe-title').textContent.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
});

sortSelect.addEventListener('change', () => {
    const container = document.querySelector('.recipe-container');
    const cardsArray = Array.from(recipeCards);

    let sortedCards;
    switch (sortSelect.value) {
        case 'title':
            sortedCards = cardsArray.sort((a, b) =>
                a.querySelector('.recipe-title').textContent.localeCompare(b.querySelector('.recipe-title').textContent)
            );
            break;
        case 'time':
            sortedCards = cardsArray.sort((a, b) => {
                const timeA = parseInt(a.querySelector('.highlights').textContent.match(/\d+/)[0]);
                const timeB = parseInt(b.querySelector('.highlights').textContent.match(/\d+/)[0]);
                return timeA - timeB;
            });
            break;
        case 'difficulty':
            const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
            sortedCards = cardsArray.sort((a, b) => {
                const diffA = a.querySelector('.recipe-meta').textContent.match(/Difficulty: (\w+)/)[1];
                const diffB = b.querySelector('.recipe-meta').textContent.match(/Difficulty: (\w+)/)[1];
                return difficultyOrder[diffA] - difficultyOrder[diffB];
            });
            break;
        default:
            sortedCards = cardsArray;
    }

    container.innerHTML = '';
    sortedCards.forEach(card => container.appendChild(card));
});