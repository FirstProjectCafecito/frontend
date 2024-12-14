import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HomeViewComponent} from './public/pages/home-view/home-view.component';
import {NavbarComponent} from './public/components/navbar/navbar.component';
import {MatButton} from '@angular/material/button';
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatToolbar} from '@angular/material/toolbar';
import {MenubarComponent} from './public/components/menubar/menubar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeViewComponent, NavbarComponent, MatButton, MatDrawer, MatDrawerContainer, MatFormField, MatInput, MatLabel, MatToolbar, RouterLink, MatSidenavModule, MenubarComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SearchEngine';
}
