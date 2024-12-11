import {Component, Input} from '@angular/core';
import {Products} from '../../../SearchEngineBasic/models/products.entity';
import {MatList, MatListItem, MatListItemIcon, MatListItemLine, MatListItemTitle} from '@angular/material/list';
import {NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-search-list-products',
  imports: [
    MatList,
    NgForOf,
    MatListItem,
    MatIcon,
    MatListItemIcon,
    MatListItemTitle,
    MatListItemLine,
    NgIf
  ],
  templateUrl: './search-list-products.component.html',
  standalone: true,
  styleUrl: './search-list-products.component.css'
})
export class SearchListProductsComponent {
  @Input() productsSearch: Products[]=[];

}
