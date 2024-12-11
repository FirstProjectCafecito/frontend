import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeViewComponent} from './public/pages/home-view/home-view.component';
import {NavbarComponent} from './public/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeViewComponent, NavbarComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SearchEngine';
}
