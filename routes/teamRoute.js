module.exports = (app) => {
    const team = require('../controllers/teamController.js');

    // Register a new Team
    app.post('/teams', team.create);

    // Retrieve all Team
    app.get('/teams', team.findAll);

    // Retrieve a Team with Id
    app.get('/teams/:teamId', team.findOne);

};