const express = require('express');
const cors = require('cors');

// Importamos todaslas rutas registradas
const routerApi = require('./routes');

// Middlewares de error
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3030;

//middleware para que todas las peticiones se parseen a JSON
app.use(express.json());

//Lista de urls permitidas para solucionar el problema de cors headers
const whitelist = ['http://localhost:8080', 'https://myapp.co', 'http://localhost:3030'];

//configuracion del cors
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(null, true);

      //callback(new Error('no permitido'));
    }
  }
}


app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});


// app.get('/nueva-ruta', (req, res) => {
//   res.send('Hola, soy una nueva ruta');
// });

//Se invocan todas las rutas declaradas
routerApi(app);

//algunos otros middlewares generales
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' +  port);
});
