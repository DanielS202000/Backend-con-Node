const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080','https://myapp.co'];
const options = {
  origin: (origin, callback ) =>{
    if (whitelist.includes(origin)){
      callback(null, true);
    }else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors());

app.get('/api', (req, res) => {
  res.send('Hola mi server express');
});

app.get('/api/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// app.get('/categories/:categoryId/products/:productId', (req, res ) =>{
//   const { categoryId, productId }= req.params;
//   res.json ({
//     categoryId,
//     productId
//   });
// })

app.listen(port, () =>{
  console.log('Mi port: ' + port);
});
