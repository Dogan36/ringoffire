import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, collection, doc, onSnapshot, addDoc, updateDoc, } from '@angular/fire/firestore';
import { Game } from '../../models/game';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
  firestore: Firestore = inject(Firestore)
  constructor(private router: Router){ }


  async newGame(){
    let game = new Game
    console.log(game)
    const docRef = await addDoc(collection(this.firestore, 'games'), game.toJson())
    this.router.navigate(['game/'  + docRef.id])
  }
}
