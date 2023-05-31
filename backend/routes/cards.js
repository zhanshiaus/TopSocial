const express = require("express");
const axios = require("axios");
const cardsRouter = express.Router();

// /api/card?id=1 get card
// http://localhost/api/cards?id=1
// http://localhost:8000/cards?id=1
// 查询参数
cardsRouter.get('/',async function(req,res){
    const {id} = req.query;
    console.log('id', id);
    if(!id){
        return res.status(400).send('id is required')
    }
    try{
        const url = 'http://localhost:8000/cards?id=' + id;
        const card = await axios.get(url);
        console.log('card',card.data);
        res.status(200).json({
            msg:'get card succeed',
            data:card.data
        })

    }catch{
        res.status(500).send('server error')
    }
})


// /api/cards post a card
// http://localhost/api/cards
// http://localhost:8000/cards
// 静态参数
cardsRouter.post('/', async function(req,res){
    const newCard = req.body;
    console.log('newCard', newCard)
    if(Object.keys(newCard).length ===0){      // note here we cannot use if (!newCard), as here is object, not number. 
        return res.status(400).send('card is required')
    }

    try{const url = 'http://localhost:8000/cards'
        await axios.post(url,newCard,{
            headers:{"Content-Type":"application/json"}
        })
        res.status(200).json({
            msg:'card is created'
        })
    }catch(error){
        res.status(500).send('server error')
    }
    
})


// /api/cards/:card_id  delete card by id 
// http://localhost/api/cards/:card_id
// http://localhost:8000/cards/5
// 动态参数
cardsRouter.delete('/:card_id', async function(req,res){
    const id = req.params.card_id //拿动态参数 card_id
    console.log('id', id)
    
    try {
        const url = 'http://localhost:8000/cards/' + id;
        const result = await axios.delete(url)
        console.log('result status', result.status)
        res.status(200).json({
            msg:'card is deleted'
        })
    }catch(error){
        res.status(500).send('server error')
    }
});


module.exports = cardsRouter;