# Curso de NodeJS

## Índice de contenidos

- [Globals](#globals)
  - [File system](#file_system)

## Basico

<a name="globals"></a>

### ¿Qué son los Globals?

Son módulos que ya vienen con nodeJS que podemos utilizar sin necesidad de importar nada, como por ejemplo;

- process
- require()
- module y module.exports
- console y console.log()
- setTimeout() y setInterval()
- **dirname y **filename

Jamás usar variables globales, ya que es un foco de problemas en nodeJs

<a name="file_system"></a>

### File System (sistema de archivos)

Nos permite leer, modificar, crear, cambiar, etc los archivos de nuestro sistema.

Todo lo que vayamos a hacer en el file system se va a ejectutar de forma asincrona, no es para nada recomendable usar metodos sincronos

Funciones basicas de File System;

- Leer archivo: readFile(ruta, callback)
- Modificar archivo: writeFile(ruta, contenido, callback)
- Eliminar archivo: unlinkFile(ruta, callback)

Ejemplo;

```
const fs = require('fs')

const leerArchivo = (ruta, callback) => {
  fs.readFile(ruta, (err, data)=> {
    callback(data.toString()) // toString ya que este nos retorna un archino no legible
  })
}

leerArchivo(__dirname + '/archivo.txt', console.log)
```

### Notas

- Jamás usar variables globales, ya que es un foco de problemas en nodeJs

## Licencia

MIT
