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
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
   
export class AppComponent {
  title = 'POO_IFRN';
}
