/* eslint-disable indent */
/* eslint-disable no-unused-vars */
'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const Validate = require('./middleware/validator');


const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');



//global middleware

app.use(express.json());
app.use(logger);




app.get('/', HomeHandler);
app.get('/person',Validate,PersonHandler);

function  HomeHandler(req, res) 
 {
    res.send('Hello World');
 }


function PersonHandler(req,res)
{
    const output = {
        
        Name: req.query.name,
      };
      res.json(output);
}



app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = 
{
    app: app,
    start: (port) => {
      const PORT = port || 3000;
      app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    },
};