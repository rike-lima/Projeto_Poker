var database = require("../database/config");

function buscarKpi(idUsuario) {

    var instrucaoSql = `select bankroll as 'caixa_atual', profit as 'profit' from usuario where idUsuario=${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarKpi
}
