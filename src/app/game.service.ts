import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Game } from "./model/game.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "application/json"
  })
}
@Injectable()
export class GameService {

  game:Game;

  constructor(private http : HttpClient) { }
 
  public showGames(): Observable<Game[]>{
    
    return this.http.get<Game[]>("http://172.23.238.185:8080/api/game/gameManager");

  }

  public createGame(game): Observable<Game>{
    console.log("gg",game);
    return this.http.post<Game>(
      "http://172.23.238.185:8080/api/game/category/1/physics",game);
    
  }

  public saveGame(game): Observable<Game>{
    return this.http.post<Game>("http://localhost:8080/api/game/game", game);
  }
}
