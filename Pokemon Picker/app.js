

const baseAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const container = document.querySelector('#container');


for (let index = 1; index < 151 ; index++) {
    const pokemon = document.createElement('div');
    const lable = document.createElement('span');
    const newImg = document.createElement('img');
    pokemon.classList.add('pokemon')

    lable.innerText = `#${index}`;
    newImg.src = `${baseAPI}/${index}.png`;

    pokemon.appendChild(newImg);
    pokemon.appendChild(lable);
    container.appendChild(pokemon)
    
    
}