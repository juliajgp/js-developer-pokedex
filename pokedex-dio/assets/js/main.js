const pokemonOl = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMore');
const limit = 5;
let offset = 0;

function loadPokemonItems(offset, limit) {
    
    function convertPokemonToLi(pokemon) {
        return `
            <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                    
                </li>
        `
    }

    pokeAPI.getPokemons(offset, limit).then((pokemonList = []) => {
        pokemonOl.innerHTML += pokemonList.map(convertPokemonToLi).join('');
    })
}
loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItems(offset, limit);
})