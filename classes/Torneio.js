import { Time } from './Time.js';
import { Partida } from './Partida.js';
import { ResultadoTorneio } from './ResultadoTorneio.js';
import { logger } from '../logger.js';

export class Torneio {
  constructor() {
    this.times = {};
    this.partidas = [];
  }

  adicionarTime(nome) {
    try {
      const time = new Time(nome);
      this.times[nome] = time;
      console.log(`✅ Time "${nome}" adicionado com sucesso!`);
    } catch (e) {
      console.log(`❌ Erro: ${e.message}`);
      logger.error(`Erro ao adicionar time: ${e.message}`);
    }
  }

  criarPartida(nomeA, nomeB, golsA, golsB) {
    try {
      const timeA = this.times[nomeA];
      const timeB = this.times[nomeB];

      if (!timeA || !timeB) {
        throw new Error("Time não existe");
      }

      const partida = new Partida(timeA, timeB, golsA, golsB);
      this.partidas.push(partida);
      console.log(`✅ Partida entre "${nomeA}" e "${nomeB}" criada com sucesso!`);
    } catch (e) {
      console.log(`❌ Erro: ${e.message}`);
      logger.error(`Erro ao criar partida: ${e.message}`);
    }
  }

  jogar() {
    return new ResultadoTorneio(this.times, this.partidas);
  }
}
