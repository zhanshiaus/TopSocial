const express = require("express");
const {getCardById, postCard, deleteCard} = require('../controllers/cardsController');
const cardsRouter = express.Router();

// /api/card?id=1 get card
// http://localhost/api/cards?id=1
// http://localhost:8000/cards?id=1
// 查询参数
cardsRouter.get('/', getCardById)


// /api/cards post a card
// http://localhost/api/cards
// http://localhost:8000/cards
// 静态参数
cardsRouter.post('/', postCard)


// /api/cards/:card_id  delete card by id 
// http://localhost/api/cards/:card_id
// http://localhost:8000/cards/5
// 动态参数
cardsRouter.delete('/:card_id', deleteCard);


module.exports = cardsRouter;