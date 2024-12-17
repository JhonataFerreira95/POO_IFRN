import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FootComponent } from './foot/foot.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FootComponent, NavComponent],
  template: `
    <app-nav></app-nav>
    <div class="container mt-4">
      <h2 class="mb-4 text-center">Formulário de Entrada</h2>
      <form (ngSubmit)="adicionarEntrada()" class="row g-3">
        <div class="col-12">
          <input 
            type="text" 
            class="form-control" 
            [(ngModel)]="usuarioInput" 
            name="usuarioInput" 
            placeholder="Digite algo..." 
            required
          />
        </div>
        <div class="col-12 d-grid">
          <button type="submit" class="btn btn-primary">Adicionar</button>
        </div>
      </form>

      <div class="mt-4">
        <h3>Entradas Salvas:</h3>
        <ul class="list-group">
          <li 
            *ngFor="let entrada of entradas" 
            class="list-group-item d-flex justify-content-between align-items-center">
            {{ entrada }}
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
  entradas: string[] = [];

  adicionarEntrada() {
    if (this.usuarioInput.trim()) {
      this.entradas.push(this.usuarioInput);
      this.usuarioInput = '';
    }
  }
}
