import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FootComponent } from './foot/foot.component';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'POO_IFRN';
}
