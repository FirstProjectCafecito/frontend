import {AfterViewInit, Component, inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
} from '@angular/material/table';
import {Products} from '../../models/products.entity';
import {NgForOf, TitleCasePipe} from '@angular/common';
import {MatButton, MatButtonModule, MatFabButton} from '@angular/material/button';
import {MatPaginator} from '@angular/material/paginator';
import {ProductsService} from '../../services/products.service';
import {MatDivider} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {EditFormDialogComponent} from '../edit-form-dialog/edit-form-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DeletedAnnotatedComponent} from '../deleted-annotated/deleted-annotated.component';
import {EditedAnnotatedComponent} from '../edited-annotated/edited-annotated.component';

@Component({
  selector: 'app-table',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderCellDef,
    NgForOf,
    TitleCasePipe,
    MatButton,
    MatPaginator,
    MatDivider,
    MatFabButton,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './table.component.html',
  standalone: true,
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() products2:Products[] = [];
  columnsToDisplay: string[] = ['id', 'name', 'brand', 'price', 'quantity'];
  productService:ProductsService = inject(ProductsService);
  durationInSeconds=3;


  constructor(private dialog:MatDialog,
              private _snackBar:MatSnackBar,) {
  }
  openEditForm(product:Products):void{
    const dialogRef = this.dialog.open(EditFormDialogComponent, {
      width: '400px',
      data: {product},
    });
    dialogRef.afterClosed().subscribe(updatedProduct => {
      if(updatedProduct) {
        console.log(updatedProduct)
        this.productService.update(updatedProduct.id, updatedProduct).subscribe({
          next: (product) => {
            console.log('Producto actualizado:', product);
            this.productService.updateData();

          },
          error: (err) => {
            console.error('Error al actualizar el producto:', err);
          },
          complete:()=>{
            this._snackBar.openFromComponent(EditedAnnotatedComponent,{
              duration:this.durationInSeconds *1000
            })
          }
        });
      }
    })
  }
  openDeleteForm(id:number):void{
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width:'200px',
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteProduct(id);
      }
    })
  }
  deleteProduct(id:number){
    this.productService.delete(id).subscribe({
      next:(response)=>{
        console.log("Producto Eliminado:",response);
        this.productService.updateData();
      },
      error:(err)=>{
        console.log("Product cannot be eliminated",err);
      },
      complete:()=>{
        this._snackBar.openFromComponent(DeletedAnnotatedComponent,{
          duration:this.durationInSeconds * 1000
        })

      }
    });
  }



}

