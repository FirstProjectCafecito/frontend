import {AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatFormField, MatInput} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {catchError, debounceTime, distinctUntilChanged, filter, fromEvent, map, of, switchMap} from 'rxjs';
import {ProductsService} from '../../../SearchEngineBasic/services/products.service';
import {Products} from '../../../SearchEngineBasic/models/products.entity';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbar,
    MatButton,
    RouterLink,
    RouterOutlet,
    MatInput,
    MatFormField,
    MatFormFieldModule
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('searchInput') inputSearch?: ElementRef;

  productService: ProductsService = inject(ProductsService);

  ngAfterViewInit(): void {
    fromEvent<any>(this.inputSearch?.nativeElement, 'keyup')
      .pipe(
        map((event) => event.target.value),
        filter((text) => text.trim().length > 0),
        debounceTime(500),
        distinctUntilChanged(), // Emitir solo si el texto cambia
        switchMap((text) => {
          return this.productService.findProductsSearched(text);
        })
      )
      .subscribe({
        next: (data) => {
          console.log(data[0], 'hola');
        },
        error: (err) => {
          console.error('Error en la búsqueda:', err);
        }
      });
  }
}
