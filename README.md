# Curso de NodeJS

## Índice de contenidos

### Básico

- Entender los módulos del core
  - [Globals](#globals)
  - [File system](#file_system)
  - [Console](#console)
- [Notas](#notas)

### Comenzamos

<a name="globals"></a>

### ¿Qué son los Globals?

Son módulos que ya vienen con nodeJS que podemos utilizar sin necesidad de importar nada, como por ejemplo;

- process
- require()
- module y module.exports
- console y console.log()
- setTimeout() y setInterval()
- **dirname y **filename

Jamás usar variables globales, ya que es un foco de problemas en nodeJs.

<a name="file_system"></a>

### File System (sistema de archivos)

Nos permite leer, modificar, crear, cambiar, etc. Los archivos de nuestro sistema.

Todo lo que vayamos a hacer en el file system se va a ejecutar de forma asíncrona, no es para nada recomendable usar métodos síncronos.

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

<a name="console"></a>

### Console

Con console podemos imprimir todo tipo de valores por nuestra terminal.

- console.log(): recibe cualquier tipo y lo muestra en el consola.
- console.info(): es equivalente a log pero es usado para informar.
- console.error(): es equivalente a log pero es usado para errores.
- console.warn(): es equivalente a log pero es usado para warning.
- console.table: muestra una tabla a partir de un objeto.
- console.group(): permite agrupar errores mediante identación.
- console.groupEnd(): finaliza la agrupación.
- console.time(): inicia un cronometro en ms.
- console.timeEnd(): Finaliza el cronometro.
- console.count(): inicia un contador autoincremental.
- console.countReset(): reinicia el contador a 0.
- console.clear(): Limpia la consola.

<a name="notas"></a>

### Notas

- Jamás usar variables globales, ya que es un foco de problemas en nodeJs
- Las funciones y métodos del File System tienen una versión síncrona, no es recomendada usar, pues podría bloquear el event loop con más facilidad

## Licencia

MIT
