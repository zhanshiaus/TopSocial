const express = require("express");
const axios = require("axios")

//create router
const router = express.Router();

// /api/profile get profile 
router.get('/profile', async function(req,res){
    try{
        const url = "http://localhost:8000/profile";
        const profile = await axios.get(url);
        console.log('profile',profile)
        res.status(200).json({
            msg: 'get profile succeed',
            data: profile.data,
        });
    }catch(error){
        res.status(500).send('server error');
    }
});

// /api/highline get highline
// http://localhost/api/highline
// http://localhost:8000/highline
router.get('/highline', async function(Req,res){
    try{
        const url = "http://localhost:8000/highline";
        const highline = await axios.get(url);
        console.log('highline',highline)
        res.status(200).json({
            
            msg: 'get highline succeed',
            highline: highline.data,
        })
    }catch(error){
        res.status(500).send('server error');
    }
})
https://desktop.postman.com/?desktopVersion=10.14.2&webVersion=10.14.3-ui-230517-0643&userId=27282747&teamId=0
// /api/message get  message
// http://localhost/api/message
// http://localhost:8000/message
router.get('/message',async function(req,res){
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

// /api/request get  request
// http://localhost/api/request
// http://localhost:8000/request
router.get('/request', async function(req,res){
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

// /api/card?id=1 get card
// http://localhost/api/cards?id=1
// http://localhost:8000/cards?id=1
router.get('/cards',async function(req,res){
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
router.post('/cards', async function(req,res){
    const newCard = req.body;
    if (newCard === {}){};
    console.log('newCard', newCard)

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
//  http://localhost/api/cards/:card_id


module.exports = router;
