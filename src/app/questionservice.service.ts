import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class QuestionService {

  constructor(private http : HttpClient) { }
  private addUrl = 'Enter the Url you want here';
 
 
  // Add method for model
  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.addUrl, hero);
  // }

}
