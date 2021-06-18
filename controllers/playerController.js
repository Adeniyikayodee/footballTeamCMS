//Importing modules here
const Player = require('../models/player.js');

// register and de-register player
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Kindly register a player"
        });
    };

    // Register a player
    const player = new Player({
        name: req.body.name, 
        age: req.body.age,
        dob: req.body.dob,
        jerseyNo: req.body.jerseyNo,
        contractType: req.body.contractType
    });

    // Save player details in the database
    player.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while registering the player."
        });
    });

};

// De-register a player
exports.delete = (req, res) => {
    player.findByIdAndRemove(req.params.playerId)
    .then(player => {
        if(!player) {
            return res.status(404).send({
                message: "Player not found with id " + req.params.playerId
            });
        }
        res.send({message: "Player de-registered successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "player not found with id " + req.params.playerId
            });                
        }
        return res.status(500).send({
            message: "Could not de-register player with id " + req.params.playerId
        });
    });
};

// Retrieve and return all players from the database.
exports.findAll = (req, res) => {
    Player.find()
    .then(players => {
        res.send(players);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving players."
        });
    });
};

// Find a single player with a Id
exports.findOne = (req, res) => {
    Player.findById(req.params.playerId)
    .then(player => {
        if(!player) {
            return res.status(404).send({
                message: "Player not found with id " + req.params.playerId
            });            
        }
        res.send(player);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Player not found with id " + req.params.playerId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving player with id " + req.params.playerId
        });
    });
};