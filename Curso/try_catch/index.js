const errorDeCodigo = () => {
  return 10 + error;
};

try {
  errorDeCodigo();
} catch (err) {
  console.log('ocurrio un error' + err.message);
}

console.log('continua el sistema');
