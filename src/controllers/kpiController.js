var kpiModel = require("../models/kpiModel");

  // const limite_linhas = 7;


    // console.log(`Recuperando as ultimas ${limite_linhas} medidas`);


function buscarKpi(req, res) {
    
    var idUsuario = req.params.idUsuario;

    kpiModel.buscarKpi(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function investir_inserir(req, res) {
    
    var idUsuario = req.params.idUsuario;
    var valor_inserido = req.body.valorServer;

    kpiModel.investir_inserir(idUsuario, valor_inserido).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function investir_atualizar_bankroll(req, res) {
    
    var idUsuario = req.params.idUsuario;
    var valor_inserido = req.body.valorServer;

    kpiModel.investir_atualizar_bankroll(idUsuario, valor_inserido).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function investir_atualizar_profit(req, res) {
    
    var idUsuario = req.params.idUsuario;
    var valor_inserido = req.body.valorServer;

    kpiModel.investir_atualizar_profit(idUsuario, valor_inserido).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function sacar_inserir(req, res) {
    
    var idUsuario = req.params.idUsuario;
    var valor_inserido = req.body.valorServer;


    kpiModel.sacar_inserir(idUsuario, valor_inserido).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function sacar_atualizar_bankroll(req, res) {
    
    var idUsuario = req.params.idUsuario;
    var valor_inserido = req.body.valorServer;


    kpiModel.sacar_atualizar_bankroll(idUsuario, valor_inserido).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function sacar_atualizar_profit(req, res) {
    
    var idUsuario = req.params.idUsuario;
    var valor_inserido = req.body.valorServer;


    kpiModel.sacar_atualizar_profit(idUsuario, valor_inserido).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function registrar_caixa(req, res) {
    
    var idUsuario = req.params.idUsuario;
    var valor_inserido = req.body.valorServer;


    kpiModel.registrar_caixa(idUsuario, valor_inserido).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function registrar_atualizar_profit(req, res) {
    
    var idUsuario = req.params.idUsuario;

    kpiModel.registrar_atualizar_profit(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarKpi,
    investir_inserir,
    investir_atualizar_bankroll,
    investir_atualizar_profit,
    sacar_inserir,
    sacar_atualizar_bankroll,
    sacar_atualizar_profit,
    registrar_caixa,
    registrar_atualizar_profit
}
