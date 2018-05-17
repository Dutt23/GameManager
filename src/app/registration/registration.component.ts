import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { GameService } from "../game.service";
import { Router } from "@angular/router";
import { RegDialogComponent } from "../reg-dialog/reg-dialog.component";
import { empty } from "rxjs/Observer";
import { MultiplayerPopupComponent } from "../multiplayer-popup/multiplayer-popup.component";
import { Game } from "../model/game.model";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})

export class RegistrationComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private gameService: GameService
  ) {}
  // All fields in the htmml file
  numberOfEasyQuestions:number;
  numberOfMediumQuestions:number;
  numberOfHardQuestions:number;
  gameLevelId:number;

  totalScoreOfEasyQuestions:number;
  totalScoreOfMediumQuestions:number;
  totalScoreOfHardQuestions:number;
  gameScoreId:number;

  totalTimeForEasyQuestions:number;
  totalTimeForMediumQuestions:number;
  totalTimeForHardQuestions:number;
  gameTimeId:number;

  gameId: number;
  gameImage: String;
  createdBy: String;
  createdOn: String;
  gameType: String;
  gameDescription: String;
  gameRules: String;
  gamePopularity: number;

games: Game[];
  openDialog(): void {
    let dialogRef = this.dialog.open(RegDialogComponent, {
      width: "600px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  openMultiDialog(): void {
    let dialogRef = this.dialog.open(MultiplayerPopupComponent, {
      width: "600px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
// To show all games and questions. Not initialised yet
  showGames() {
    this.gameService.showGames().subscribe(games => (this.games = games));
  }
  // This is for showing only if multiplayer
  gameMode: string;
  gameValue(hi : string)
  {
this.gameMode = hi;
  }
  //This is to check if correcr data is coming or not
  //Not required in last code

  //This is your add method make a service and call it.
  //Hero is the domain class you're modelling , cast your data into that class so it can be sent as an object

  // add(gameType: string) {
    

  //   this.gameService
  //     .createGame({ gameType } as Game)
  //     .subscribe(game => {
  //       this.games.push(game);
  //       this.ngOnInit();
  //     });
  // }
  game;
  add()
  {
    // Adding all objects and fields to one object
    let games = {
      gameId : this.gameId,
      gameImage : this.gameImage,
      createdBy : this.createdBy,
      createdOn : this.createdOn,
      gameType : this.gameType,
      gameDescription: this.gameDescription,
      gameRules: this.gameRules,
      gamePopularity: this.gamePopularity,

      gameQuestionLevel: [
        {
          numberOfEasyQuestions: `${this.numberOfEasyQuestions}`,
          numberOfMediumQuestions: `${this.numberOfMediumQuestions}`,
          numberOfHardQuestions: this.numberOfHardQuestions,
          gameLevelId: this.gameLevelId,
          
        }
      ],
      gameQuestionScore: [
        {
          totalScoreOfEasyQuestions: `${this.totalScoreOfEasyQuestions}`,
          totalScoreOfMediumQuestions: `${this.totalScoreOfMediumQuestions}`,
          totalScoreOfHardQuestions: this.totalScoreOfHardQuestions,
          gameScoreId: this.gameScoreId,
          
        }
      ],
      gameQuestionTime:[
        {
          totalTimeForEasyQuestions: `${this.totalTimeForEasyQuestions}`,
          totalTimeForMediumQuestions: `${this.totalTimeForMediumQuestions}`,
          totalTimeForHardQuestions: this.totalTimeForHardQuestions,
          gameTimeId: this.gameTimeId,

        }
      ]

    
    };
    this.gameService
    .createGame(games)
    .subscribe(game => {
      this.game = game;
    });
  }
  

  ngOnInit() {
    // Not yet required
    // this.showGames();
  }

  // Dummy data
  // categories = [
  //   "Category 1",
  //   "Category 2",
  //   "Category 3",
  //   "Category 4",
  //   "Category 5"
  // ];

  // topics = ["Topic 1", "Topic 2", "Topic 3", "Topic 4"];
}

