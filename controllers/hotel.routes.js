const router = require('express').Router();

router.get('/', (req, res) => res.render('all-hotels.ejs'));



module.exports = router;