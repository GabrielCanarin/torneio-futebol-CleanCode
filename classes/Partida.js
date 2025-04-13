export class Partida {
  constructor(timeA, timeB, golsA, golsB) {
    if (golsA < 0 || golsB < 0) {
      throw new Error("Número inválido de gols");
    }

    this.timeA = timeA;
    this.timeB = timeB;
    this.golsA = golsA;
    this.golsB = golsB;

    this.resultado = `${timeA.nome} ${golsA} x ${golsB} ${timeB.nome}`;

    if (golsA > golsB) {
      timeA.adicionarPontos(3);
    } else if (golsB > golsA) {
      timeB.adicionarPontos(3);
    } else {
      timeA.adicionarPontos(1);
      timeB.adicionarPontos(1);
    }
  }
}
