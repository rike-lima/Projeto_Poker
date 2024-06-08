// setInterval(criarGrafico, 5000);
// função para menu menuHamburguer
function ativarMenu() {
  var menuHamburguer = document.getElementById('menuHamburguer');
  if (menuHamburguer.style.display === 'none') {
    menuHamburguer.style.display = 'block';
  } else {
    menuHamburguer.style.display = 'none';
  }
}


// configuração para kpi de seleção de dados
const kpiProfit = document.getElementById("kpi_profit")
const kpiCaixa = document.getElementById("kpi_caixa")
const kpiInvestimento = document.getElementById("kpi_investimento")
const kpiSaque = document.getElementById("kpi_saque")

var profitGrafico = 0

var idUsuario = sessionStorage.ID_USUARIO
b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

var dia1 = ""
var dia2 = ""
var dia3 = ""
var dia4 = ""
var dia5 = ""
var dia6 = ""
var dia7 = ""

var valor1 = 0
var valor2 = 0
var valor3 = 0
var valor4 = 0
var valor5 = 0
var valor6 = 0
var valor7 = 0

pegarDados();
function pegarDados() {
  fetch(`/kpi/buscarKpi/${idUsuario}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO pegarDados()!");
      console.log(resposta);

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          kpiProfit.innerHTML = json[0].profit;
          profitGrafico = json[0].profit;
          kpiCaixa.innerHTML = json[0].caixa_atual;
          kpiInvestimento.innerHTML = json[0].investimento;
          kpiSaque.innerHTML = json[0].saque;

          if (json[0].investimento == undefined) {
            kpiInvestimento.innerHTML = '0.00'
          }
          if (json[0].saque == null) {
            kpiSaque.innerHTML = '0.00'
          }

          inserirProfitBanco()
          
        });
      } else {
        console.log("Erro busca pelo caixa");

        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });
}

function inserirProfitBanco() {
  fetch(`/kpi/inserirProfit/${idUsuario}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      profitGraficoServer: profitGrafico,
    })
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO atualizarGrafico()!");
      console.log(resposta);

      if (resposta.ok) {
        console.log(resposta);

      } else {
        console.log("Erro na inserção");

        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });
    criarGrafico();

}



atualizarGrafico()
function atualizarGrafico() {
  fetch(`/kpi/plotarGrafico/${idUsuario}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO pegarDados()!");
      console.log(resposta);

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);

          dia1 = json[0].dia;
          valor1 = json[0].valor;

          dia2 = json[1].dia;
          valor2 = json[1].valor;

          dia3 = json[2].dia;
          valor3 = json[2].valor;

          dia4 = json[3].dia;
          valor4 = json[3].valor;

          dia5 = json[4].dia;
          valor5 = json[4].valor;

          dia6 = json[5].dia;
          valor6 = json[5].valor;

          dia7 = json[6].dia;
          valor7 = json[6].valor;

          criarGrafico()

        });
      } else {
        console.log("Erro busca pelo caixa");

        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

}
//inicio das funções de interação do usuário


var valor_inserido = 0;
function enviarInvestimento() {
  valor_inserido = Number(ipt_valor_inserido.value);

  fetch(`/kpi/investir_inserir/${idUsuario}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      valorServer: valor_inserido,
    })
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO enviarInvestimento()!");
      console.log(resposta);

      if (resposta.ok) {
        console.log(resposta);

        atualizar_bankroll()

      } else {
        console.log("Erro na inserção");

        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  function atualizar_bankroll() {
    fetch(`/kpi/investir_atualizar_bankroll/${idUsuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        valorServer: valor_inserido,
      })
    })
      .then(function (resposta) {
        console.log("ESTOU NO THEN DO atualizarBankroll()!");
        console.log(resposta);

        if (resposta.ok) {
          console.log(resposta);

          resposta.json().then((json) => {
            console.log(json);
          });

          atualizar_profit()
        } else {
          console.log("Erro na inserção");

          resposta.text().then((texto) => {
            console.error(texto);
          });
        }
      })
      .catch(function (erro) {
        console.log(erro);
      });
  }

  function atualizar_profit() {

    fetch(`/kpi/investir_atualizar_profit/${idUsuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        valorServer: valor_inserido,
      })
    })
      .then(function (resposta) {
        console.log("ESTOU NO THEN DO atualizar_profit()!");
        console.log(resposta);

        if (resposta.ok) {
          console.log(resposta);
          pegarDados();
        } else {
          console.log("Erro na inserção");

          resposta.text().then((texto) => {
            console.error(texto);
          });
        }
      })
      .catch(function (erro) {
        console.log(erro);
      });
  }

  ipt_valor_inserido.value = " "

}

function enviarSaque() {
  valor_inserido = Number(ipt_valor_inserido.value);
  fetch(`/kpi/sacar_inserir/${idUsuario}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      valorServer: valor_inserido,
    })
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO enviarSaque()!");
      console.log(resposta);

      if (resposta.ok) {
        console.log(resposta);

        atualizar_bankroll_saque()

      } else {
        console.log("Erro na inserção");

      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  function atualizar_bankroll_saque() {
    fetch(`/kpi/sacar_atualizar_bankroll/${idUsuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        valorServer: valor_inserido,
      })
    })
      .then(function (resposta) {
        console.log("ESTOU NO THEN DO atualizar_bankroll_saque()!");
        console.log(resposta);

        if (resposta.ok) {
          console.log(resposta);

          atualizar_profit_saque();

        } else {
          console.log("Erro na inserção");

        }
      })
      .catch(function (erro) {
        console.log(erro);
      });
  }

  function atualizar_profit_saque() {

    fetch(`/kpi/sacar_atualizar_profit/${idUsuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        valorServer: valor_inserido,
      })
    })
      .then(function (resposta) {
        console.log("ESTOU NO THEN DO atualizar_profit_saque()!");
        console.log(resposta);

        if (resposta.ok) {
          console.log(resposta);

          pegarDados()

        } else {
          console.log("Erro na inserção");

        }
      })
      .catch(function (erro) {
        console.log(erro);
      });

  }

  ipt_valor_inserido.value = " "

}


function atualizarCaixa() {
  valor_inserido = Number(ipt_valor_inserido.value);

  fetch(`/kpi/registrar_caixa/${idUsuario}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      valorServer: valor_inserido,
    })
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO atualizarCaixa()!");
      console.log(resposta);

      if (resposta.ok) {
        console.log(resposta);

        atualizar_caixa_profit()
      } else {
        console.log("Erro na inserção");

        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  function atualizar_caixa_profit() {

    fetch(`/kpi/registrar_atualizar_profit/${idUsuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        valorServer: valor_inserido,
      })
    })
      .then(function (resposta) {
        console.log("ESTOU NO THEN DO atualizar_caixa_profit()!");
        console.log(resposta);

        if (resposta.ok) {
          console.log(resposta);

          pegarDados()
        } else {
          console.log("Erro na inserção");

          resposta.text().then((texto) => {
            console.error(texto);
          });
        }
      })
      .catch(function (erro) {
        console.log(erro);
      });
  }
  ipt_valor_inserido.value = " "

}

// inicio das configurações do gráfico de profit

function criarGrafico() {
  const ctx = document.getElementById('myChart');

  if (Chart.getChart(ctx)) {
    Chart.getChart(ctx).destroy();
  }

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [`${dia1}`, `${dia2}`, `${dia3}`, `${dia4}`, `${dia5}`, `${dia6}`, `${dia7}`],
      datasets: [{
        label: 'Histórico Profit',
        data: [valor1, valor2, valor3, valor4, valor5, valor6, valor7],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  
}

