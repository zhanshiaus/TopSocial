const express = require("express");
const axios = require("axios");
const messageRouter = express.Router();

//  https://desktop.postman.com/?desktopVersion=10.14.2&webVersion=10.14.3-ui-230517-0643&userId=27282747&teamId=0
// /api/message get  message
// http://localhost/api/message
// http://localhost:8000/message
messageRouter.get('/',async function(req,res){
    try{
        const url = 'http://localhost:8000/message';
        const message = await axios.get(url);
        console.log('message',message);
        res.status(200).json({
            msg:'get message succeed',
            data:{
                message:message.data
            }
        })

    }catch(error){
        res.status(500).send('server error')
    }
})


module.exports = messageRouter;
