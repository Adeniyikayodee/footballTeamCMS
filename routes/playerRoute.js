const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController.js');


router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'player';

    next();
})


router.route('/players')
    .post(playerController.create); // Register a new Player
    
router.route('/players')
    .get(playerController.findAll); // Retrieve a Player with Id

router.route('/players/playerId')
    .get(playerController.findOne); // Retrieve a Player with Id

router.route('/players/playerId')
    .delete(playerController.delete); // De-register a player with Id

module.exports = router;