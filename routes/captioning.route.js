const { Router } = require("express");
const captioningController = require("../controllers/captioning.controller");
// init express router
const CapioningRoute = Router();

CapioningRoute.use("/caption", CapioningRoute);
CapioningRoute.post("/", captioningController.getImageCaption);

module.exports = CapioningRoute;
