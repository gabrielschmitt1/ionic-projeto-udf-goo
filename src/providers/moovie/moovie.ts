import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  public baseApiPath = "http://api.themoviedb.org/3";
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies()  {
    return this.http.get(this.baseApiPath + 
      "/movie/popular?api_key=89ed401fdbbd3418a6be61792109e2e4");
  }
}
