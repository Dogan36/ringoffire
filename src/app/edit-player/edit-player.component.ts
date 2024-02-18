import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogClose, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-edit-player',
  standalone: true,
  imports: [CommonModule, MatDialogClose, MatButton, MatDialogTitle],
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.scss'
})
export class EditPlayerComponent {

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) { }


  allProfilPictures = ['avartar (1).jpg', 'avartar (2).jpg', 'avartar (3).jpg', 'avartar (4).jpg', 'avartar (5).jpg', 'avartar (6).jpg']
}
