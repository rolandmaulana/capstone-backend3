const db = require("../models");
const User = db.user;
const Plan = db.plan;

exports.createplan = (req, res) => {
    // Create new plan
    Plan.create({
        city: req.body.city,
        duration: req.body.duration,
        bahari: req.body.bahari,
        budaya: req.body.budaya,
        tamanHiburan: req.body.tamanHiburan,
        cagarAlam: req.body.cagarAlam,
        pusatPerbelanjaan: req.body.pusatPerbelanjaan,
        tempatPerbelanjaan: req.body.tempatPerbelanjaan,
        userId: req.params.userId
    }).then(plan => {
        res.send({ message: "Plan created successfully!" });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });

    
};