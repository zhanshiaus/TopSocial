const express = require("express");
const {getMessage} = require('../controllers/messageController');
const messageRouter = express.Router();


//  https://desktop.postman.com/?desktopVersion=10.14.2&webVersion=10.14.3-ui-230517-0643&userId=27282747&teamId=0
// /api/message get  message
// http://localhost/api/message
// http://localhost:8000/message
messageRouter.get('/', getMessage)


module.exports = messageRouter;
