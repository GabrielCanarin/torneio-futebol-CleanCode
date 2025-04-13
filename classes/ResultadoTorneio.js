export class ResultadoTorneio {
  constructor(times, partidas) {
    this.times = Object.values(times);
    this.partidas = partidas;
  }

  imprimirClassificacao() {
    console.log("\nClassificação Final:");
    this.times
      .sort((a, b) => b.pontos - a.pontos)
      .forEach((time, index) => {
        console.log(`${index + 1}. ${time.nome} (${time.pontos} pontos)`);
      });
  }

  imprimirResultados() {
    console.log("\nResultados:");
    this.partidas.forEach(partida => {
      console.log(partida.resultado);
    });
  }
}
