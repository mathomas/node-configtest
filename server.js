import bodyParser from 'body-parser';
import routes from './api/routes/testRoutes';
import express from 'express';

const app = express(),
  port = process.env.PORT || 3000;
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app); //register the route


app.listen(port);


console.log('Test config RESTful API server started on: ' + port);

