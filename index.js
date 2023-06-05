const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
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
