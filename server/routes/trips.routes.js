const tripsController = require('../controllers/trips.controllers')

module.exports = (app) => {
    app.get("/api/test", tripsController.apiTest)
}