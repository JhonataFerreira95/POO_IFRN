import { Component } from '@angular/core';
import { Jogo } from '../models/jogo';

@Component({
  selector: 'app-jogo-carta',
  standalone: true,
  imports: [],
  template: `<p>Jogo de Carta: {{ titulo }} - Idade Mínima: {{ idadeMinima }}</p>`,
  styleUrls: ['./jogo-carta.component.css']
})
export class JogoCarta extends Jogo {
  constructor(
    titulo: string,
    anoPublicacao: number,
    fabricante: string,
    public idadeMinima: number
  ) {
    super(titulo, anoPublicacao, fabricante);
  }

  exibirRegras(): void {
    console.log(`Regras do Jogo de Carta "${this.titulo}": Idade mínima de ${this.idadeMinima} anos.`);
  }
}
