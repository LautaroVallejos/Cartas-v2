const { Router } = require('express');
const app = require('../public/app.js');
const router = Router();

router.get('/', (req, res, next) =>{
    res.render('index');
    console.log('thegame')
})


module.exports = router;