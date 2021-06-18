//importing modules here
const express = require('express');
const router = express.Router();
const Player = require('../controllers/playerController.js');


router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'player';

    next();
})


router.route('/players')
    .post(Player.create); // Register a new Player
    
router.route('/players')
    .get(Player.findAll); // Retrieve a Player with Id

router.route('/players/playerId')
    .get(Player.findOne); // Retrieve a Player with Id

router.route('/players/playerId')
    .delete(Player.delete); // De-register a player with Id

module.exports = router;