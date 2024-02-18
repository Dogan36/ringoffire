import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-add-player-info',
  standalone: true,
  imports: [MatCard, MatCardContent],
  templateUrl: './add-player-info.component.html',
  styleUrl: './add-player-info.component.scss'
})
export class AddPlayerInfoComponent {

}
