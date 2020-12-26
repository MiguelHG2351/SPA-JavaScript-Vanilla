import getData from '../utils/getData'

const Home = async () => {
    const characters = await getData()
    return (
    `
    <div class="characters">
        ${characters.results.map(character => `
            <article class="character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" class="responsive-img" alt="${character.name}"/>
                </a>
                <h2>${character.name}</h2>
            </article>
        `).join('')}
    </div>
    
    `)
}

export default Home