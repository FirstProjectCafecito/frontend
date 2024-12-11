import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-delete-dialog',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogTitle
  ],
  templateUrl: './delete-dialog.component.html',
  standalone: true,
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent {
  constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>,) {
  }

  delete(){
    this.dialogRef.close(true);
  }
  cancel(){
    this.dialogRef.close();
  }
}
