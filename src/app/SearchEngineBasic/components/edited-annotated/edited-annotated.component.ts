import {Component, inject} from '@angular/core';
import {MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edited-annotated',
  imports: [],
  templateUrl: './edited-annotated.component.html',
  standalone: true,
  styleUrl: './edited-annotated.component.css'
})
export class EditedAnnotatedComponent {
  snackBarRef= inject(MatSnackBarRef)

}
