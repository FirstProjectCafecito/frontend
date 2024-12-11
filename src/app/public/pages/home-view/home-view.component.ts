import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home-view',
  imports: [
    NavbarComponent
  ],
  templateUrl: './home-view.component.html',
  standalone: true,
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {

}
