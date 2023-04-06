const { createServer } = require('http');

const port = 3000;

const router = (req, res) => {
  res.writeHead(201, { 'Content-Type': 'text/html; charset=utf-8' });

  switch (req.url) {
    case '/':
      res.write('<h1>Esta es mi ruta PRINCIPAL HTTP con node</h1>');
      res.end();
      break;
    case '/segunda':
      res.write('<h2>Esta es mi ruta SECUNDARIA HTTP con node</h2>');
      res.end();
      break;
    case '/tercero':
      res.write('<h2>Esta es mi TERCERA ruta HTTP con node</h2>');
      res.end();
      break;
    default:
      res.write('<h3>Lolamento, no hemos encontrado esta ruta</h3>');
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
