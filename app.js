const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
                .options({
                    direccion:{
                        alias: 'd',
                        desc: 'Dirección de la ciudad para ver el clima',
                        demand: true
                    }
                })
                .help()
                .argv;

// lugar.getCoordenadas(argv.direccion)
//     .then( resp => {
//         clima.getClima(resp.lon, resp.lat).then(console.log);
//     })
//     .catch( err => {
//         const code = err.response.data.cod;
//       if(err.response.data.cod == 404){
//           console.log(`No hay información para la ciudad ${argv.direccion}`);
//       }

//     });


const getclima = async( dir ) =>{


    try {
        const { lon, lat, name} = await lugar.getCoordenadas(dir);
        const temperatura       = await clima.getClima(lon, lat);
        return `En la ciudad de ${name} hace una temperatura de ${temperatura}`;

    } catch (error) {
        return `No se ha podido recuperar el clima de la ciudad ${dir}`
    }
}

getclima(argv.direccion)
    .then(console.log)
    .catch(console.log);




