const { createServer } = require('http');

const port = 3000;

const router = (req, res) => {
  res.writeHead(201, { 'Content-Type': 'text/plain' });

  switch (req.url) {
    case '/':
      res.write('Esta es mi ruta PRINCIPAL HTTP con node');
      res.end();
      break;
    case '/segunda':
      res.write('Esta es mi ruta SECUNDARIA HTTP con node');
      res.end();
      break;
    case '/tercero':
      res.write('Esta es mi TERCERA ruta HTTP con node');
      res.end();
      break;
    default:
      res.write('Lolamento, no hemos encontrado esta ruta');
      res.end();
  }
};

const server = createServer(router);

server.listen(port, err => {
  if (err) {
    console.info('Lolamento hubo un error con el servidor');
    console.error(err.message);
  }
  console.info(`> Listo en el puerto http://localhost:${port}`);
});
