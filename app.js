const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Imprime en consola la tabla de multiplicar', opts)
    .help()
    .argv;
// const argv = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
var colors = require('colors');
// console.log(argv);
// let argv = process.argv;
let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        console.log('-- Entrando a Listar --');
        listarTabla(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        // console.log('crear');
        break;
    default:
        console.log('comando no reconocido');
}


// let base = 'abc';

// console.log(process.argv);

// let argv2 = process.argv;

// console.log(argv.base);
// console.log('------------------');
// console.log('Limite es: ', argv.limite);


// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(parametro);