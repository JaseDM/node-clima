const axios = require('axios');
const apikey    = 'ce20c793de0bce5238bda44a83b94433';


const getClima = async(lon, lat) =>{

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`)

    

    return resp.data.main.temp;




}


module.exports = {
    getClima
}