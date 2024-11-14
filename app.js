import express from 'express';
import ExpressError from './expressError.js';
import { mean, mode, median } from './math.js';

const app = express();

app.use(express.json());

app.get('/mean', function(req, res, next) {
    try {
        let numStr = req.query.nums;
        if (!numStr) {
            throw new ExpressError('nums are required',400);
        }
        let numsArr = numStr.split(',');
        numsArr.forEach( val => {
            if (!parseInt(val)) {
                throw new ExpressError(`${val} is not a number`,400);
            }
        });
        let result = mean(numsArr);
        return res.json({'operation':'mean','value':result})
    }
    catch (e) {
        return next(e)
    }
  });

  app.get('/mode', function(req, res, next) {
    try {
        let numStr = req.query.nums;
        if (!numStr) {
            throw new ExpressError('nums are required',400);
        }
        let numsArr = numStr.split(',');
        numsArr.forEach( val => {
            if (!parseInt(val)) {
                throw new ExpressError(`${val} is not a number`,400);
            }
        });
        let result = mode(numsArr);
        return res.json({'operation':'mode','value':result})
    }
    catch (e) {
        return next(e)
    }
  });
  
  app.get('/median', function(req, res, next) {
    try {
        let numStr = req.query.nums;
        if (!numStr) {
            throw new ExpressError('nums are required',400);
        }
        let numsArr = numStr.split(',');
        numsArr.forEach( val => {
            if (!parseInt(val)) {
                throw new ExpressError(`${val} is not a number`,400);
            }
        });
        let result = median(numsArr);
        return res.json({'operation':'median','value':result})
    }
    catch (e) {
        return next(e)
    }
  });
  
  //error handler
  app.use(function(err, req, res, next) {
    
    let status = err.status || 500;
    let message = err.msg;
    
    return res.json({error: {message:message, status:status}});
  });
  
  app.listen(3000, function() {
    console.log('Server is listening on port 3000');
  });

