/* eslint-disable indent */
'use strict';

module.exports = ((req,res,next) =>
{
   if(!(req.query.name))
   {
   next('error validate');
   }
   else 
   {
    console.log('__Request__', req.query);
    next();
   }
});