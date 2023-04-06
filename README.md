# Curso de NodeJS

## Índice de contenidos

### Básico

- Entender los módulos del core
  - [Globals](#globals)
  - [File system](#file_system)
  - [Console](#console)
  - [Try y Catch](#try_catch)
  - [Procesos Hijos](#procesos_hijos)
  - [http](#http)
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

<a name="try_catch"></a>

### Try y Catch

Con Node podemos manejar los errores de una manera muy optima.

- try: se ejecuta el código.
- catch: se manipula el error.

```
try {
  // código...
} catch(err) {
  // manipulación de error
}
```

<a name="procesos_hijos"></a>

### Procesos Hijos

El módulo de procesos secundarios de Node.js (chil_process) tiene 2 funciones spawn y exec, mediante las cuales podemos iniciar procesos secundarios en su propio hilo para ejecutar cualquier programa en el sistema.

- Usa spawn cuando quieres que el proceso hijo devuelva datos binarios enormes en node
- Usa spawn cuando quieres recibir datos desde que el proceso arranca.

- Usa exec cuando quieres que el proceso hijo devuelva mensajes de estado simples
- Usa exec cuando solo quieres recibir datos al final de la ejecución.

<a name="notas"></a>

### Http

El módulo HTTP nos permite crear un servidor HTTP o conectarnos con un servidor exterior directamente con nodeJS

```
const { createServer } = require('http');

const port = 3000;

const route = (req, res) => {
  res.writeHead(201, { 'Content-Type': 'text-plain' });

  switch (req.url) {
    case '/':
      res.write('Esta es la ruta principal de mi servidor HTTP');
      res.end();
      break;
    case '/segundo':
      res.write('Esta es la segunda ruta de mi servidor HTTP');
      res.end();
      break;
    default:
      res.write('Esta ruta no se encuentra');
      res.end();
  }
};

const server = createServer(route);

server.listen(port, err => {
  if (err) {
    console.info('Lolamento, hubo un error');
    console.error(err.message);
  }

  console.info(`> servidor: http://localhost:${port}`);
});
```

<a name="notas"></a>

### Notas

- Jamás usar variables globales, ya que es un foco de problemas en nodeJs
- Las funciones y métodos del File System tienen una versión síncrona, no es recomendada usar, pues podría bloquear el event loop con más facilidad
- Cuando se genera un error, node propaga el error hacia arriba, hasta que esta es capturado. si el error no se captura node se detiene. Siempre que sea posible debemos capturar todos los errores que se puedan generar en nuestros hilos.
- stdout, sterr son estándares de salida (stdout: los datos se presentaron correctamente sterr, hubo un error)

## Licencia

MIT
