var express = require('express');
var router = express.Router();
var redisClient = require('../redis/index.js');

router.get('/', async (req, res)=>{
    var videoList = await redisClient.get('videoData')
    // console.log(JSON.parse(videoList))
    res.json(JSON.parse(videoList)).end();
})

module.exports = router;
