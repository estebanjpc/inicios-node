var colors = require('colors');
const fs = require('fs');

let data = '';


listarTabla = (base, limite) => {

    console.log(`===== Tabla de ${base} =====`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`.red);
    }
    console.log('========================'.green);
}


crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`${limite} no es numero`);
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else {
                resolve(`tabla-${base}.txt`);
            }
            console.log(`el archivo tabla-${base} ha sido creado`.green);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}