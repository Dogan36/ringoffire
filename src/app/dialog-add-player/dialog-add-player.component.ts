import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButton, FormsModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})


export class DialogAddPlayerComponent {
  name: string = '';

  constructor(private dialogRef: MatDialogRef<DialogAddPlayerComponent>) { }




onNoClick(): void {
  this.dialogRef.close();
}

}
