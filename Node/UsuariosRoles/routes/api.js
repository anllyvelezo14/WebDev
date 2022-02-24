const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Entra correctamente. FUNCIONA');
});

module.exports = router;