//importing modules here
const express = require('express');
const router = express.Router();
const Team = require('../controllers/teamController.js');


router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'team';

    next();
})


router.route('/teams')
    .post(Team.create); // create a team
    
router.route('/teams')
    .get(Team.findAll); // retrive all team

router.route('/teams/teamId')
    .get(Team.findOne);  // get a team by ID

module.exports = router;