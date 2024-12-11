import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {BaseFormComponent} from '../../../shared/components/base-form.component';
import {NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-add-form-dialog',
  imports: [
    MatFormField,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatInput,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgIf,
    MatButton
  ],
  templateUrl: './add-form-dialog.component.html',
  standalone: true,
  styleUrl: './add-form-dialog.component.css'
})
export class AddFormDialogComponent extends BaseFormComponent{
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddFormDialogComponent>,
  ) {
    super();
    this.form = fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      brand: ['', [Validators.required,Validators.minLength(1)]],
      quantity: ['', [Validators.required,Validators.min(1)]],
      price: ['', [Validators.required,Validators.min(1)]],
    })
  }

  cancel():void{
    this.dialogRef.close();
  }
  save(){
    this.dialogRef.close(this.form.value);
  }
}
