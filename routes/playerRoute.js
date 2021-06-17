module.exports = (app) => {
    const player = require('../controllers/playerController.js');

    // Register a new Player
    app.post('/players', players.create);

    // Retrieve all Players
    app.get('/players', players.findAll);

    // Retrieve a Player with Id
    app.get('/players/:playerId', players.findOne);

    // De-register a player with Id
    app.delete('/players/:playerId', players.delete);
};