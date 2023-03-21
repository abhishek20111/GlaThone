const express = require('express');
const axios = require('axios')

const router = express.Router();
const API_KEY = 'sDbjd6FTxl4IAVuvpmyvY4eKeL1H8VYM';

router.post('/verify_url', async (req, res) => {
    
    try {
        const { url } = req.body;
        const axios = require('axios');
        
        const response = await axios.get(`https://ipqualityscore.com/api/json/url/${API_KEY}/${url}`);
          console.log(response.data);
          res.send(response.data);
      } catch (error) {
        console.log("error in api_utl.js " + error);
        res.status(500).send('Not valid email');
      }
  });


module.exports = router;