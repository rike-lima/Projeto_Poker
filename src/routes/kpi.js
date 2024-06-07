var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

router.get("/buscarKpi/:idUsuario", function (req, res) {
    kpiController.buscarKpi(req, res);
});

router.post("/investir_inserir/:idUsuario", function (req, res) {
    kpiController.investir_inserir(req, res);
});

router.put("/investir_atualizar_bankroll/:idUsuario", function (req, res) {
    kpiController.investir_atualizar_bankroll(req, res);
});

router.put("/investir_atualizar_profit/:idUsuario", function (req, res) {
    kpiController.investir_atualizar_profit(req, res);
});

router.post("/sacar_inserir/:idUsuario", function (req, res) {
    kpiController.sacar_inserir(req, res);
});

router.put("/sacar_atualizar_bankroll/:idUsuario", function (req, res) {
    kpiController.sacar_atualizar_bankroll(req, res);
});

router.put("/sacar_atualizar_profit/:idUsuario", function (req, res) {
    kpiController.sacar_atualizar_profit(req, res);
});

router.post("/registrar_caixa/:idUsuario", function (req, res) {
    kpiController.registrar_caixa(req, res);
});

router.put("/registrar_atualizar_profit/:idUsuario", function (req, res) {
    kpiController.registrar_atualizar_profit(req, res);
});

module.exports = router;