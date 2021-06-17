const = require('../models/team.js');

// register a team
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Please, register a player"
        });
    }

    // Register a team  // the details
    const team = new team({
        name: req.body.title, 
        manager: req.body.manager,
        teamAlias: req.body.teamAlias,
        foundedData: req.body.foundedData,
        manager: req.body.manager,
        stadium: req.body.stadium,
        details: req.body.details,
    });

    // Save team in the database
    team.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the team."
        });
    });
};

// Retrieve and return all teams from the database.
exports.findAll = (req, res) => {
    Team.find()
    .then(teams => {
        res.send(teams);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving teams."
        });
    });
};

// Find a single team with a teamId
exports.findOne = (req, res) => {
    team.findById(req.params.teamId)
    .then(team => {
        if(!team) {
            return res.status(404).send({
                message: "Team not found with id " + req.params.teamId
            });            
        }
        res.send(team);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Team not found with id " + req.params.teamId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving team with id " + req.params.teamId
        });
    });
};