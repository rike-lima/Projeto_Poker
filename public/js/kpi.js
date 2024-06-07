
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

var idUsuario = sessionStorage.ID_USUARIO
b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

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
        kpiCaixa.innerHTML = json[0].caixa_atual;
        kpiInvestimento.innerHTML = json[0].investimento;
        kpiSaque.innerHTML = json[0].saque;

        if (json[0].investimento == undefined) {
          kpiInvestimento.innerHTML = '0.00'
        }
        if (json[0].saque == null) {
          kpiSaque.innerHTML = '0.00'
          }
          
          
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
  
  
  // inicio das configurações do gráfico de profit
  const ctx = document.getElementById('myChart');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
      label: '# of Votes',
      data: [-100, 120, 3, 5, 2, 3],
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

 function atualizar_bankroll(){
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

  function atualizar_profit(){

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

ipt_valor_inserido.value=" "

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

    function atualizar_bankroll_saque(){
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

    function atualizar_profit_saque(){

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

    ipt_valor_inserido.value=" "

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

    function atualizar_caixa_profit(){

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
    ipt_valor_inserido.value=" "

}
