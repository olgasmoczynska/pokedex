let currentState;

let isFilter = false;

const pokemonPerPage = 16;

const fetchPokemons = (url) => {

    let fetchUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonPerPage}`;
    document.querySelector(".pokedex").style.display = "none";
    document.querySelector(".loader").style.display = "block";
    if (url !== null) {
        fetchUrl = url;
    }
    fetch(fetchUrl)
        .then((textHttpResult) => {
            return textHttpResult.json();
        })
        .then((jsonHttpResult) => {
            fetchDetailsForPokemonJsonList(jsonHttpResult.results);
            currentState = jsonHttpResult;
            setTimeout(function () {
                document.querySelector(".loader").style.display = "none";
                document.querySelector(".pokedex").style.display = "grid";
            }, 250)

        });
};

const fetchPokemonsForType = (type) => {

    let fetchUrl = `https://pokeapi.co/api/v2/type/${type}`;
    document.querySelector(".pokedex").style.display = "none";
    document.querySelector(".loader").style.display = "block";
    fetch(fetchUrl)
        .then((textHttpResult) => {
            return textHttpResult.json();
        })
        .then((jsonHttpResult) => {
            const pokemonList = jsonHttpResult.pokemon.map((element) => ({
                name: element.pokemon.name,
                url: element.pokemon.url
            }));
            fetchDetailsForPokemonJsonList(pokemonList);
            setTimeout(function () {
                document.querySelector(".loader").style.display = "none";
                document.querySelector(".pokedex").style.display = "grid";
            }, 250)
        });
};

function fetchDetailsForPokemonJsonList(jsonList) {
    const promises = [];
    console.log(jsonList);
    for (let i = 0; i < jsonList.length; i++) {
        promises.push(fetch(jsonList[i].url).then((res) => res.json()))
    }
    Promise.all(promises).then((detailsJson) => {
        const pokemon = detailsJson.map((data) => ({
            name: data.name,
            image: data.sprites.front_default,
            type: data.types.map((type) => type.type.name).join(", "),
        }));
        displayPokemon(pokemon);
    });
}

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonContent = pokemon.map(item => `
    <li class="card">
        <h2 class="card-title">${item.name}</h2>
        <img class="card-image" src="${item.image}">
        <p class="card-text">Type: ${item.type}</p>
    </li>
    `).join("");
    pokedex.innerHTML = pokemonContent;
};

fetchPokemons(null);

function previous() {
    if (!isFilter) {
        fetchPokemons(currentState.previous)
    }
}

function next() {
    if (!isFilter) {
        fetchPokemons(currentState.next)
    }
}

let prevBut = document.querySelector(".buttons-previous");
let nextBut = document.querySelector(".buttons-next");

let all = document.querySelector("input[value=all]");
all.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = false;
        fetchPokemons(`https://pokeapi.co/api/v2/pokemon/?limit=${pokemonPerPage}`);
        prevBut.style.cursor = "pointer";
        nextBut.style.cursor = "pointer";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "white";
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "white";
        };
        prevBut.onmouseout = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
        nextBut.onmouseout = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let normal = document.querySelector("input[value=normal]");
normal.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("normal");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let fighting = document.querySelector("input[value=fighting]");
fighting.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("fighting");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let flying = document.querySelector("input[value=flying]");
flying.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("flying");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let poison = document.querySelector("input[value=poison]");
poison.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("poison");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5);"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let ground = document.querySelector("input[value=ground]");
ground.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("ground");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let rock = document.querySelector("input[value=rock]");
rock.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("rock");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let bug = document.querySelector("input[value=bug]");
bug.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("bug");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let ghost = document.querySelector("input[value=ghost]");
ghost.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("ghost");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let steel = document.querySelector("input[value=steel]");
steel.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("steel");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let fire = document.querySelector("input[value=fire]");
fire.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("fire");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let water = document.querySelector("input[value=water]");
water.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("water");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let grass = document.querySelector("input[value=grass]");
grass.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("grass");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let electric = document.querySelector("input[value=electric]");
electric.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("electric");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let psychic = document.querySelector("input[value=psychic]");
psychic.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("psychic");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let ice = document.querySelector("input[value=ice]");
ice.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("ice");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let dragon = document.querySelector("input[value=dragon]");
dragon.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("dragon");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let dark = document.querySelector("input[value=dark]");
dark.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("dark");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});

let fairy = document.querySelector("input[value=fairy]");
fairy.addEventListener("change", e => {
    if (e.target.checked) {
        isFilter = true;
        fetchPokemonsForType("fairy");
        prevBut.style.cursor = "default";
        nextBut.style.cursor = "default";
        prevBut.onmouseover = function () {
            prevBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)"
        };
        nextBut.onmouseover = function () {
            nextBut.style.backgroundColor = "rgba(250, 250, 250, 0.5)";
        };
    }
});
