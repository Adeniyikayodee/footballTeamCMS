//importing modules here
const express = require('express');
const router = express.Router();
const Match = require('../controllers/matchController.js');


router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'match';

    next();
})


router.route('/matches')
    .post(Match.create); // Create a match schedule
    
router.route('/matches')
    .get(Match.findAll); // Retrieve all match schedule

router.route('/matches/matchId')  
    .put(Match.update); //update match status

router.route('/matches/matchId')
    .delete(Match.delete); // Cancal a match schedule

module.exports = router;