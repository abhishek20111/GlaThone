const express = require('express');
const axios = require('axios')

const router = express.Router();
const API_KEY = 'sDbjd6FTxl4IAVuvpmyvY4eKeL1H8VYM';

router.post('/verify_email', async (req, res) => {
     
    try {
        const { email } = req.body;
        const axios = require('axios');
        
        const response = await axios.get(`https://ipqualityscore.com/api/json/email/${API_KEY}/${email}`);
        // console.log(`${response.data.valid} ${response.data.fraud_score}`);
          console.log(response.data);
          
        res.send(`${response.data.valid} ${response.data.fraud_score}`);
      } catch (error) {
        console.log("error in api_email.js " + error); 
        res.status(500).send('Not valid email');
      }
  });


module.exports = router;