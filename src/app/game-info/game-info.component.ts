import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule, MatCard],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})

export class GameInfoComponent {
  cardAction = [
    { "title": "Waterfall", "description": "Everyone starts drinking at the same time. Players can only stop drinking when the person to their right stops." },
  { "title": "You", "description": "You choose someone to drink." },
  { "title": "Me", "description": "Congrats! Take a shot!" },
  { "title": "Category", "description": "Come up with a category (e.g., Colors). Each player must name an item from that category. The first to hesitate or repeat drinks." },
  { "title": "Bust a jive", "description": "Player 1 performs a dance move. Player 2 repeats the move and adds another. Continue until someone messes up, and that person drinks." },
  { "title": "Chicks", "description": "All women take a drink." },
  { "title": "Heaven", "description": "Everyone reaches for the sky. The last person to do so drinks." },
  { "title": "Mate", "description": "Choose a mate. Whenever you drink, your mate drinks too, and vice versa." },
  { "title": "Thumbmaster", "description": "You become the Thumbmaster. At any time, you can place your thumb on the table. The last person to notice and place their thumb drinks." },
  { "title": "Men", "description": "All men take a drink." },
  { "title": "Quizmaster", "description": "You become the Quizmaster. Ask a question, and whoever answers drinks. You remain the Quizmaster until someone else becomes the Quizmaster." },
  { "title": "Never have I ever...", "description": "Say something you've never done. Anyone who has done it drinks." },
  { "title": "Rule", "description": "Make a rule. Anyone who breaks the rule drinks." }
  
  ];

  title: string = '';
  description: string = '';
  @Input() card!: string

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[0]
      this.title = this.cardAction[cardNumber-1].title
      this.description = this.cardAction[cardNumber-1].description
    }
  }
}
