import { Component } from '@angular/core';
import { Biblioteca } from '../biblioteca';
import { Jogo } from '../jogo';
import { JogoTabuleiro } from '../jogo-tabuleiro';
import { JogoCarta } from '../jogo-carta';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-corpo',
  standalone: true,
  imports: [ FormsModule, NgFor],
  templateUrl: './corpo.component.html',
  styleUrl: './corpo.component.css'
})
export class CorpoComponent {
  biblioteca : Biblioteca = new Biblioteca();

  tipo_de_jogo = '';
  titulo ='';
  anoPublicacao = new Date();
  fabricante = '';
  numeroJogadores ? = 0;
  idadeMinima ? = 0;

  get jogo() : Jogo[] {
    return this.biblioteca.exibirLista();
  }

  adicionarJogo() : void{
    if(!this.titulo||!this.fabricante||!this.tipo_de_jogo|| !this.anoPublicacao){
      alert('Coloque todos os campos obrigatorios')
      return;
    }
    if (this.tipo_de_jogo == 'tabuleiro' && this.numeroJogadores){
      this.biblioteca.adicionarJogo(
        new JogoTabuleiro(this.titulo,this.anoPublicacao,this.fabricante,this.numeroJogadores)
      );
    }else if(this.tipo_de_jogo == 'carta' && this.idadeMinima){
      this.biblioteca.adicionarJogo(
        new JogoCarta(this.titulo,this.anoPublicacao,this.fabricante,this.idadeMinima)
      );
    }else{
      alert('Por favor, preencha todos os campos')
    }
    this.limparForms();
  }
    limparForms() : void {
      this.tipo_de_jogo = '';
      this.titulo ='';
      this.anoPublicacao = new Date();
      this.fabricante = '';
      this.numeroJogadores  = undefined;
      this.idadeMinima  = undefined;
    }

}
