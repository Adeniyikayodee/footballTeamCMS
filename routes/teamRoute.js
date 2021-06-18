const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController.js');


router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'team';

    next();
})


router.route('/teams')
    .post(teamController.create);
    
router.route('/teams')
    .get(teamController.findAll);

router.route('/teams/teamId')
    .get(teamController.findOne);

module.exports = router;