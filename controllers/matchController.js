//Importing modules here
const Match = require('../models/match.js');

// create a match schedule
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "register a match"
        });
    };

    // create a schedule here
    const match = new Match({
        opponentName: req.body.title, 
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        status: req.body.status
    });
    
    // Save the schedule details in the database
    match.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while scheduling."
        });
    });

};

// cancel a match schedule
exports.delete = (req, res) => {
    match.findByIdAndRemove(req.params.matchId)
    .then(match => {
        if(!match) {
            return res.status(404).send({
                message: "match not found with id " + req.params.matchId
            });
        }
        res.send({message: "match cancelled successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "match not found with id " + req.params.matchId
            });                
        }
        return res.status(500).send({
            message: "Could not cancel match with id " + req.params.matchId
        });
    });
};

// Retrieve and return all match schedule from the database.
exports.findAll = (req, res) => {
    Match.find()
    .then(matches => {
        res.send(matches);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving matches schedule."
        });
    });
};

// Update match result (either Win, lose or draw)
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Match status can not be empty, either win, lose or draw"
        });
    }

    // Find match and update
    Match.findByIdAndUpdate(req.params.matchId, {
        opponentName: req.body.opponentName,
        status: req.body.status,
    }, {new: true})
    .then(match => {
        if(!match) {
            return res.status(404).send({
                message: "Match not found with id " + req.params.matchId
            });
        }
        res.send(match);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Match not found with id " + req.params.matchId
            });                
        }
        return res.status(500).send({
            message: "Error updating match status with id " + req.params.matchId
        });
    });
};