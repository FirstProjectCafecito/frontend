import {AfterViewInit, Component, ElementRef, inject, ViewChild} from '@angular/core';
import {Products} from '../../../SearchEngineBasic/models/products.entity';
import {ProductsService} from '../../../SearchEngineBasic/services/products.service';
import {debounceTime, distinctUntilChanged, filter, fromEvent, map, switchMap} from 'rxjs';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-menubar',
  imports: [
    MatToolbar,
    MatButton,
    RouterLink,
    RouterOutlet,
    MatInput,
    MatFormField,
    MatFormFieldModule,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    MatIconButton,
    MatIcon,
    MatNavList,
    MatListItem
  ],
  templateUrl: './menubar.component.html',
  standalone: true,
  styleUrl: './menubar.component.css'
})
export class MenubarComponent implements AfterViewInit {
  @ViewChild('searchInput') inputSearch?: ElementRef;
  producstSearched:Products[]=[];
  productService: ProductsService = inject(ProductsService);

  ngAfterViewInit(): void {
    fromEvent<any>(this.inputSearch?.nativeElement,'keyup')
      .pipe(
        map((event)=> event.target.value),
        filter((text)=> text.trim().length > 0),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((text)=>{
          return this.productService.findProductsSearched(text);
        })
      ).subscribe(data=>{
      this.producstSearched=data.content;
      console.log(this.producstSearched);
    })
  }
}
