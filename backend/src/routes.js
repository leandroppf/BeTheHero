const express = require("express");

const controllers = require("./controllers");

const routes = express.Router();

/**
 * Session Routes
 */
routes.post("/sessions", controllers.SessionController.create);

/**
 * ONG Routes
 */
routes.get("/ongs", controllers.OngController.index);
routes.post("/ongs", controllers.OngController.create);

/**
 * Incidents Routes
 */
routes.get("/incidents", controllers.IncidentController.index);
routes.post("/incidents", controllers.IncidentController.create);
routes.delete("/incidents/:id", controllers.IncidentController.delete);

/**
 * Personal incidents
 */
routes.get("/profile", controllers.ProfileController.index);

module.exports = routes;
