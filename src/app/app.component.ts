import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FootComponent } from './foot/foot.component';
import { NavComponent } from './nav/nav.component';
import { NgFor } from '@angular/common';
import { Biblioteca } from './biblioteca';
import { JogoTabuleiro } from './jogo-tabuleiro';
import { CorpoComponent } from './corpo/corpo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    FootComponent,
    NavComponent,
    NgFor,
    CorpoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POO_IFRN';
  entradas = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
}
