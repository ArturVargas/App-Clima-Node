
const axios = require('axios');

const getLugar = async (place) => {

  const encodeUrl = encodeURI(place);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {'X-RapidAPI-Key': 'YOUR_API_KEY'}
  });

    const resp = await instance.get();
        if (resp.data.Results.length === 0) {
            throw new Error(`No hay resultados para ${ place }`);
        }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
        
    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugar
}

