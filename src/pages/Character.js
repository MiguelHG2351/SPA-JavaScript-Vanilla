import getHash from '../utils/getHash'
import getData from '../utils/getData'

const Character = async () => {
    const id = getHash()
    const character = await getData(id)
    return (
    `
    <div class="characters-inner">
        <div class="container">
            <article class="character-card">
                <img src="${character.image}" class="responsive-img" alt="${character.image}" />
                <h2>${character.name}</h2>
            </article>
            <article class="character-card">
                <div class="container">
                    <h3>Episodes: <span>${character.episode.length}</span><h3>
                    <h3>Status: <span>${character.status}</span><h3>
                    <h3>Especies: <span>${character.species}</span><h3>
                    <h3>Gender: <span>${character.gender}</span><h3>
                    <h3>Origin: <span>${character.origin.name}</span><h3>
                    <h3>last location: <span>${character.location.name}</span><h3>
                </div>
            </article>
        </div>
    </div>
    
    `)
}

export default Character