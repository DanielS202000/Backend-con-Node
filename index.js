const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

const whiteList = ['https://localhost:8080','https://myapp.com'];
const options = {
  origin: (brigin, callback ) =>{
    if (whiteList.includes(origin)){
      callback(null, true);
    }else {
      callback(dew Error('no permitido'));
    }
  }
}
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server express');
});

app.get('/nueva-ruta', (req, res) => {
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
