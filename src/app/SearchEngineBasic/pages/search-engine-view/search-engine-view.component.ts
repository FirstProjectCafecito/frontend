import {Component, inject, OnInit} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {TableComponent} from '../../components/table/table.component';
import {ProductsService} from '../../services/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Products} from '../../models/products.entity';
import {MatButton, MatIconButton, MatMiniFabButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {AddFormDialogComponent} from '../../components/add-form-dialog/add-form-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AddedAnnotatedComponent} from '../../components/added-annotated/added-annotated.component';

@Component({
  selector: 'app-search-engine-view',
  imports: [
    MatInput,
    MatLabel,
    MatFormField,
    TableComponent,
    MatButton,
    MatIconModule,
    MatMiniFabButton,
    MatIconButton
  ],
  templateUrl: './search-engine-view.component.html',
  standalone: true,
  styleUrl: './search-engine-view.component.css'
})
export class SearchEngineViewComponent implements OnInit {
  products: Products[] = [];
  productsService: ProductsService = inject(ProductsService);
  pageableData : any = {};

  durationInSeconds=3;

  constructor(private dialog:MatDialog,
              private _snackBar:MatSnackBar) {}

  ngOnInit(): void {
    this.productsService.getPaginationData();

    this.productsService.getProducts.subscribe({
      next: response =>{
        this.products = response;
      }
    })

    this.productsService.getPageableData.subscribe({
      next:response=>{
        this.pageableData=response;
      }
    })

  }
  openAddForm(){
    const matDialog = this.dialog.open(AddFormDialogComponent,{
      width:"400px",
    })
    matDialog.afterClosed().subscribe(productCreated =>{
      if(productCreated){
        this.productsService.create(productCreated).subscribe({
          next: response=>{
            console.log("Agregando producto...",response);
          },
          error: err=>{
            console.warn("Error al agregar producto",err);
          },
          complete: ()=>{
            this.productsService.updateData();
            this._snackBar.openFromComponent(AddedAnnotatedComponent,{
              duration:this.durationInSeconds * 1000
            })
          }
        })
      }
    })
  }
  nextPage(){
    this.productsService.nextPage();
  }
  beforePage(){
    this.productsService.beforePage();
  }


}
