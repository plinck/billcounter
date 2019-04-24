"use strict";

module.exports = function (app) {

    // get random number between 0 and max-1
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // Route for counting bills
    // right now it generates random bills, but later we plug in actual device
    app.get("/api/countbills", (req, res) => {
        const ones = getRandomInt(10);
        const fives = getRandomInt(5);
        const tens = getRandomInt(4);
        const twenties = getRandomInt(3);
        const fifties = getRandomInt(3);
        const hundreds = getRandomInt(2);

        try {
            res.json({
                ones: ones,
                fives: fives,
                tens: tens,
                twenties: twenties,
                fifties: fifties,
                hundreds: hundreds
            });
        } catch (err) {
            // catch all error
            res.status(500).json(`Error caught counting bills in route app.get("/api/countbills" ${err.errors[0].message}`);
        }
    }); // Route

};