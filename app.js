
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugar( argv.direccion )
//         .then( console.log );

    // clima.getClima(45 , -75)
    //         .then(console.log)
    //         .catch(console.log)


    const getInfo = (direccion) => {
        lugar.getLugar(direccion)
            .then(res => { 
                console.log("Respuesta ", res);
                if(res) {
                    clima.getClima(res.lat, res.lng)
                    .then(res => { console.log(`El clima de ${direccion} es de ${res} grados Celcius`)})
                    .catch(err => { console.log(`No se pudo Determinar el Clima de ${direccion}`)});
                }
            })
            .catch(err => { console.log('Ocurrio un error', err)});

    }

    getInfo(argv.direccion)
