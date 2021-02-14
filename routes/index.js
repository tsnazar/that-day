const express = require('express');
const router = express.Router();
const async = require('async');

const get_that_day_articles = require('../config/parse').get_that_day_articles;

const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Europe/London");


/* GET home page. */

router.get('/', function(req, res, next) {
  
  var datetime = dayjs.tz(dayjs()).format('DD MMMM');
  var client = req.redis;

  try{
    client.get(datetime, async(err, data) =>{
      if(err) throw(err);

      if(data){
        res.render('index', { title: 'Express', arts:JSON.parse(data), today: datetime });
      } else {
        get_that_day_articles().then(
          (result)=>{
            client.setex(datetime, 600, JSON.stringify(result));
            res.render('index', { title: 'Express', arts:result, today: datetime });
          }
        );
      }
    });
  } catch(err){
    console.log(err);
  }

});

module.exports = router;
