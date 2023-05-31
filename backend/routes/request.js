const express = require("express");
const axios = require("axios");
const requestRouter = express.Router();

// /api/request get  request
// http://localhost/api/request
// http://localhost:8000/request
requestRouter.get('/', async function(req,res){
    try{
        const url = 'http://localhost:8000/request';
        const request = await axios.get(url);
        console.log('request',request);
        res.status(200).json({
            msg:'get request succeed',
            data:request.data
        })

    }catch(error){
        res.status(500).send('server error')
    }
})

module.exports = requestRouter;