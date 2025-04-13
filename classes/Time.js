export class Time {
  constructor(nome) {
    if (!nome || nome.trim() === '') {
      throw new Error("Nome inválido");
    }
    this.nome = nome;
    this.pontos = 0;
  }

  adicionarPontos(pontos) {
    this.pontos += pontos;
  }
}