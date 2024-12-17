import { Component } from '@angular/core';
import { Jogo } from '../models/jogo';
import { JogoTabuleiro } from '../jogo-tabuleiro/jogo-tabuleiro.component';
import { JogoCarta } from '../jogo-carta/jogo-carta.component';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [],
  template: `
    <h2>Biblioteca de Jogos</h2>
    <button (click)="adicionarJogos()">Adicionar Jogos</button>
    <button (click)="listarJogos()">Listar Jogos</button>
    <button (click)="removerJogo()">Remover Jogo</button>
  `,
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent {
  jogos: Jogo[] = [];

  adicionarJogos(): void {
    this.jogos.push(new JogoTabuleiro('Xadrez', 1475, 'Desconhecido', 2));
    this.jogos.push(new JogoCarta('Uno', 1971, 'Mattel', 7));
    alert('Jogos adicionados!');
  }

  listarJogos(): void {
    console.log('Lista de Jogos:');
    this.jogos.forEach(jogo => console.log(jogo.titulo));
  }

  removerJogo(): void {
    this.jogos.pop();
    alert('Último jogo removido.');
  }
}
