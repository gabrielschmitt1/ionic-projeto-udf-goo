import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Gabriel Ribeiro Schmitt",
    data: "November 5, 1955",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>();


  public nome_usuario:string = "Gabriel Ribeiro Schmitt";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MoovieProvider
    ) {
  }

  /**
   * somaDoisNumeros
   */
  public somaDoisNumeros(num1:number, num2:number): void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
      this.movieProvider.getLatestMovies().subscribe(
        data => {
          // transformando a resposta em um objeto de qualquer tipo
          const response = (data as any);
          // trar a objeto de resposta como um arquivo .JSON
          const objeto_retorno = JSON.parse(response._body);
          this.lista_filmes = objeto_retorno.results;
          console.log(objeto_retorno);
      }, error => {
          console.log(error);
      }
    )
  }
}
