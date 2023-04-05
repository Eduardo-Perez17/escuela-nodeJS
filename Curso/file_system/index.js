// FILE SYSTEM
const fs = require('fs');

const leerArchivo = (ruta, callback) => {
  fs.readFile(ruta, (err, data) => {
    try {
      callback(data.toString());
    } catch {
      console.log('ocurrio un error' + err);
    }
  });
};

const escribirArchivo = (ruta, contenido) => {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) console.log('no he podido escribirlo', err);
    else console.log('se ha escrito correctamente');
  });
};

const borrarArchivo = (ruta, callback) => {
  fs.unlink(ruta, callback);
};

// leerArchivo(__dirname + '/feature.txt', console.log);
// escribirArchivo(__dirname + '/feature.txt', 'Soy un archivo nuevo, hola mundo!');
// borrarArchivo(__dirname + '/feature.txt', console.log);
