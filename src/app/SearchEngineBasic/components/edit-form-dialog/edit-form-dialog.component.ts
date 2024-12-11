import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BaseFormComponent} from '../../../shared/components/base-form.component';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Products} from '../../models/products.entity';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-edit-form-dialog',
  imports: [
    MatDialogTitle,
    ReactiveFormsModule,
    MatDialogContent,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButton,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NgIf
  ],
  templateUrl: './edit-form-dialog.component.html',
  standalone: true,
  styleUrl: './edit-form-dialog.component.css'
})
export class EditFormDialogComponent extends BaseFormComponent {
  form: FormGroup;
  initialValues:any;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Products }
  ) {
    super();
    this.form = this.fb.group({
      id: [data.product.id],
      name: [data.product.name, [Validators.required, Validators.minLength(3)]],
      price: [data.product.price, [Validators.required, Validators.min(1)]],
      brand: [data.product.brand, Validators.required],
      quantity: [data.product.quantity, [Validators.required, Validators.min(1)]],
    });
    this.initialValues=this.form.getRawValue();
  }

  areValuesChanged():boolean {
    return JSON.stringify(this.form.getRawValue()) !== JSON.stringify(this.initialValues);

  }
  save(): void {
    if (this.form.valid && this.areValuesChanged()) {
      this.dialogRef.close(this.form.value);
    }
  }
  cancel(): void {
    this.dialogRef.close();
  }
}
