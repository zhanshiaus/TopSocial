const express = require("express");
const {getProfile} = require('../controllers/profileController')
const profileRouter = express.Router();

// /api/profile get profile 
profileRouter.get('/', getProfile);


module.exports = profileRouter;