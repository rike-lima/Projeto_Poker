var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

router.get("/buscarKpi/:idUsuario", function (req, res) {
    kpiController.buscarKpi(req, res);
});

module.exports = router;