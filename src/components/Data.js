const apiKey = 'c2f64594c64a460899f2957c155ca036';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

const Data = async () => {
    try {
        const response = await fetch(apiUrl); 
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export default Data