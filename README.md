# Curso de NodeJS

## Índice de contenidos

- Entender los módulos del core
  - [Globals](#globals)
  - [File system](#file_system)
- [Notas](#notas)

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

Nos permite leer, modificar, crear, cambiar, etc. Los archivos de nuestro sistema.

Todo lo que vayamos a hacer en el file system se va a ejecutar de forma asíncrona, no es para nada recomendable usar métodos síncronos

Funciones básicas de File System;

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

<a name="notas"></a>

### Notas

- Jamás usar variables globales, ya que es un foco de problemas en nodeJs
- Las funciones y métodos del File System tienen una versión síncrona, no es recomendada usar, pues podría bloquear el event loop con más facilidad

## Licencia

MIT
