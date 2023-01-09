var express = require('express');
var router = express.Router();
var redisClient = require('../redis/index.js');


router.post('/users', async (req, res) => {
    var user = await redisClient.get('users')
    // console.log(JSON.parse(user).userInfo)
    // console.log(req.body)

    // redisClient.get('users')
    //     .then((response) => response.toString())
    //     .then((result) => res.json(JSON.parse(result)).end());

    var users = JSON.parse(user).userInfo

    // console.log(users.length)
    var flag = 0;
    for(var i = 0; i< users.length; i++){
        if(users[i].sid === req.body.sid){
            flag = 1;
        }
    }
    if(flag === 0){
        res.send("0")
    }else{
        res.send("1")
    }
}) ;

module.exports = router;
