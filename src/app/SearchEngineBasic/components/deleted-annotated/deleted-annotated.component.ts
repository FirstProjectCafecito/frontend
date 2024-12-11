import {Component, inject} from '@angular/core';
import {MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-deleted-annotated',
  imports: [],
  templateUrl: './deleted-annotated.component.html',
  standalone: true,
  styleUrl: './deleted-annotated.component.css'
})
export class DeletedAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);

}
