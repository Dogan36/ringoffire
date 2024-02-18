import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from './player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { Firestore, collection, doc, onSnapshot, addDoc, updateDoc, } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { EditPlayerComponent } from '../edit-player/edit-player.component';
import { AddPlayerInfoComponent } from '../add-player-info/add-player-info.component';
import { NgIf } from '@angular/common';
import { GameOverComponent } from './game-over/game-over.component'





@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, GameInfoComponent, NgIf, GameOverComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  game!: Game;

  unsubGame: any
  gameID!: string;
  firestore: Firestore = inject(Firestore)
  private dialog = inject(MatDialog)


  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.newGame()
    this.route.params.subscribe((params) => {
      this.gameID = params['id']
      this.unsubGame = onSnapshot(doc(this.getGamesRef(), this.gameID), (doc) => {
        const onlineGame: any = doc.data()
        this.game.currentPlayer = onlineGame['currentPlayer']
        this.game.playedCards = onlineGame['playedCards']
        this.game.stack = onlineGame['stack']
        this.game.players = onlineGame['players']
        this.game.playerImages = onlineGame['playerImages']
        this.game.pickCardAnimation = onlineGame['pickCardAnimation'];
        this.game.currentCard = onlineGame['currentCard'];
        this.game.gameOver = onlineGame['gameOver']
      })

    })

  }



  ngonDestroy() {
    this.unsubGame
  }

  async newGame() {
    this.game = new Game
  }


  takeCard() {
    if(this.game.stack.length == 0){
      this.game.gameOver=true
      this.updateGame()
    }
    else if (!this.game.pickCardAnimation) {
      this.game.gameOver=false
      console.log(this.game.players)
      if (this.game.players.length > 1) {
        this.game.currentCard = this.game.stack.pop()!;
        this.game.pickCardAnimation = true;

        this.game.currentPlayer++
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length
        this.updateGame()
        setTimeout(() => {
          this.game.playedCards.push(this.game.currentCard)
          this.game.pickCardAnimation = false;
          this.updateGame()
          this.scrollContainer()
        }, 1000)

      } else {
        this.openAddPlayerInfo()
      }
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.game.players.push(name)
        this.game.playerImages.push('avartar (1).jpg')
        this.updateGame()
      }
    });
  }

  openAddPlayerInfo(): void {
    const dialogRef = this.dialog.open(AddPlayerInfoComponent);
    dialogRef.afterClosed().subscribe(name => {
      console.log("openInfo")
    })
  }

  getGamesRef() {
    console.log(collection(this.firestore, 'games'))
    return collection(this.firestore, 'games')
  }

  getGameRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId)
  }

  async updateGame() {
    console.log('game updated')
    let docRef = doc(collection(this.firestore, 'games'), this.gameID);
    await updateDoc(docRef, { ...this.game.toJson() });
  }

  editPlayer(playerID: number) {

    const dialogRef = this.dialog.open(EditPlayerComponent);

    dialogRef.afterClosed().subscribe((change: string) => {
      if (change) {
        if (change == 'DELETE') {
          this.game.playerImages.splice(playerID, 1)
          this.game.players.splice(playerID, 1)
        } else {
          this.game.playerImages[playerID] = change
        }
        this.updateGame()
      }
    })

  }

  playerActiveIndex!: number

  @ViewChild('playerList')
  playerList!: ElementRef;

  scrollContainer() {
    if (this.playerList && this.playerList.nativeElement) {
      const containerElement = this.playerList.nativeElement;
      const activePlayerElement = containerElement.querySelector('.playerActive');
      if (activePlayerElement) {
        containerElement.scrollLeft = activePlayerElement.offsetLeft;
      }
    }
  }
}
