
function ativarMenu() {
    var menuHamburguer = document.getElementById('menuHamburguer');
    if (menuHamburguer.style.display === 'none') {
        menuHamburguer.style.display = 'block';
    } else {
        menuHamburguer.style.display = 'none';
    }
}



const kpiProfit= document.getElementById("kpi_profit")
const kpiCaixa= document.getElementById("kpi_caixa")
var idUsuario= sessionStorage.ID_USUARIO  
b_usuario.innerHTML= sessionStorage.NOME_USUARIO;

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