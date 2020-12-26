const API_URL = `https://rickandmortyapi.com/api/character/`

async function getData(id) {
    const apiURL = id ? `${API_URL}${id}` : API_URL
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data;
    }
    catch (err) {
        console.log(`Fetch Error ${err}`)
    }
}

export default getData