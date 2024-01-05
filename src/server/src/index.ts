const express = require('express');
const bodyParser = require('body-parser');



async function start() {
  try {
    const app = express();

    app.listen(3000, () => {
      console.log('Node API app is running on port 3000');
    });

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // body parser
    app.use(bodyParser.json({
      limit: '500kb'
    }));

    // Routes
    app.get('/', (req: any, res: any) => {
      res.send({ message: "Server is up!" });
    });
    // app.use('/customers', require('./routes/customerRoute'));
    app.use('/donation', require('./routes/donationRoute'));

  } catch (error) {
    console.log(error);
  }
}

start();
