var database = require("../database/config");

function buscarKpi(idUsuario) {

    var instrucaoSql = `SELECT bankroll AS 'caixa_atual',
    profit AS 'profit',
    (SELECT sum(valor) FROM registro WHERE fkUsuario = ${idUsuario} AND acao = 'investimento') AS 'investimento',
    (SELECT sum(valor) FROM registro WHERE fkUsuario = ${idUsuario} AND acao = 'saque') AS 'saque'
	FROM usuario WHERE idUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


// INVESTIMENTOS ABAIXO
function investir_inserir(idUsuario, valor_inserido) {
    var instrucaoSql = `
    INSERT INTO registro(fkUsuario, acao, valor) VALUES (${idUsuario}, 'investimento', ${valor_inserido});`

    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}

function investir_atualizar_bankroll(idUsuario, valor_inserido) {
    var instrucaoSql = `UPDATE usuario SET bankroll = (SELECT bankroll FROM (SELECT * FROM usuario) AS novo WHERE idUsuario = ${idUsuario}) + ${valor_inserido} WHERE idUsuario = ${idUsuario};`

    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}

function investir_atualizar_profit(idUsuario, valor_inserido) {
    var instrucaoSql = `UPDATE usuario SET profit = (SELECT profit FROM (SELECT * FROM usuario) AS novo WHERE idUsuario = ${idUsuario}) - ${valor_inserido} WHERE idUsuario = ${idUsuario};`

    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}

//SAQUES ABAIXO:
function sacar_inserir(idUsuario, valor_inserido) {
    var instrucaoSql = `    
   INSERT INTO registro(fkUsuario, acao, valor) VALUES (${idUsuario}, 'saque', ${valor_inserido});`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function sacar_atualizar_bankroll(idUsuario, valor_inserido) {
    var instrucaoSql = `
    UPDATE usuario
    SET bankroll = (SELECT bankroll FROM (SELECT * FROM usuario) AS novo WHERE idUsuario = ${idUsuario}) - ${valor_inserido}
    WHERE idUsuario = ${idUsuario};
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function sacar_atualizar_profit(idUsuario, valor_inserido) {
    var instrucaoSql = `
    UPDATE usuario
       SET profit = (SELECT profit FROM (SELECT * FROM usuario) AS novo WHERE idUsuario = ${idUsuario}) + ${valor_inserido}
       WHERE idUsuario = ${idUsuario};
        `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


//REGISTROS ABAIXO:
function registrar_caixa(idUsuario, valor_inserido) {
    var instrucaoSql = `
    update usuario set bankroll= ${valor_inserido} where idUsuario=${idUsuario};    
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrar_atualizar_profit(idUsuario, novo_valor) {
    var instrucaoSql = `
    
    UPDATE usuario u
    JOIN (
    SELECT 
        u.idUsuario,
        ${novo_valor} - SUM(r_investimento.valor) + SUM(r_saque.valor) AS novo_profit
    FROM 
        usuario u
        LEFT JOIN registro as r_investimento ON u.idUsuario = r_investimento.fkUsuario AND r_investimento.acao = 'investimento'
        LEFT JOIN registro as r_saque ON u.idUsuario = r_saque.fkUsuario AND r_saque.acao = 'saque'
    WHERE u.idUsuario = ${idUsuario}
    GROUP BY u.idUsuario, u.bankroll
    ) AS calculos ON u.idUsuario = calculos.idUsuario
    SET u.profit = calculos.novo_profit;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function inserirProfit(idUsuario, profit){

    var instrucaoSql =`insert into historico(fkUsuario,dia, valor) values 
    (${idUsuario}, now(), ${profit})`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function plotarGrafico(idUsuario, limite_linhas){

    var instrucaoSql =`select dia,valor from historico where fkUsuario=${idUsuario} order by dia desc limit ${limite_linhas};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
    registrar_atualizar_profit,
    inserirProfit,
    plotarGrafico
}
