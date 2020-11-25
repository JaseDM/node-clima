const axios = require('axios');
const apikey    = 'ce20c793de0bce5238bda44a83b94433';


const getCoordenadas = async( ciudad ) => {

    const direccion = encodeURI(ciudad);


    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${direccion}&appid=${apikey}`
      });

    const resp = await instance.get();

    
    
    



    const datos     = resp.data;

    const name    = datos.name;
    const lon      = datos.coord.lon;
    const lat      = datos.coord.lat;


    return{
        name,
        lon,
        lat 
    };

}













module.exports = {
    getCoordenadas 
}