const express = require("express");
const axios = require("axios")
const highlineRouter = require('./highline')
const cardsRouter = require('./cards')
const messageRouter = require('./message')
const profileRouter = require('./profile')
const requestRouter = require('./request')

//create router
const router = express.Router();
router.use('/highline', highlineRouter);
router.use('/cards', cardsRouter);
router.use('/message', messageRouter);
router.use('/profile', profileRouter);
router.use('/request', requestRouter);


module.exports = router;
