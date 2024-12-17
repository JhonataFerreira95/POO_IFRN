import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FootComponent } from './foot/foot.component';
import { NavComponent } from './nav/nav.component';
import { NgFor } from '@angular/common';
import { Biblioteca } from './biblioteca';
import { JogoTabuleiro } from './jogo-tabuleiro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FootComponent, NavComponent, NgFor],
  template: `
    <app-nav></app-nav>
    <div class="container mt-4">
      <h2 class="mb-4 text-center">Formulário de Entrada</h2>
      <form (ngSubmit)="adicionarJogo()" class="row g-3">
        <div class="col-12">
          <input 
            type="text" 
            class="form-control" 
            [(ngModel)]="usuarioInput" 
            name="usuarioInput" 
            placeholder="Digite o nome do jogo..." 
            required
          />
        </div>
        <div class="col-12 d-grid">
          <button type="submit" class="btn btn-primary">Adicionar</button>
        </div>
      </form>

      <div class="mt-4">
        <h3>Jogos na Biblioteca:</h3>
        <ul class="list-group">
          <li 
            *ngFor="let jogo of biblioteca.listaDejogos" 
            class="list-group-item d-flex justify-content-between align-items-center">
            {{ jogo._titulo }} 
            <span class="badge bg-success">✓</span>
          </li>
        </ul>
      </div>
    </div>
    <app-foot></app-foot>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POO_IFRN';
  usuarioInput: string = '';
  biblioteca: Biblioteca = new Biblioteca();

  adicionarJogo() {
    if (this.usuarioInput.trim()) {
      const novoJogo = new JogoTabuleiro(
        this.usuarioInput, 
        new Date(), 
        'Fabricante Exemplo', 
        4 // Número de jogadores como exemplo
      );
      this.biblioteca.adicionarJogo(novoJogo);
      this.usuarioInput = '';
    }
  }
}
