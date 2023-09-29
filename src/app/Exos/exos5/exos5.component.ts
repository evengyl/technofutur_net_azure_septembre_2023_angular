import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { FakeAuthExos5Service } from './fake-auth-exos5.service';

@Component({
  selector: 'app-exos5',
  templateUrl: './exos5.component.html',
  styleUrls: ['./exos5.component.scss']
})
export class Exos5Component {

  listArticles : any[] = []
  newArticleName : string = "pomme"
  newArticleQty : number = 4

  isConnect : boolean = false


  constructor(
    private cartServ : CartService,
    private fakeAuthServe : FakeAuthExos5Service
  ){
    this.listArticles = this.cartServ.listArticles
    this.isConnect = this.fakeAuthServe.isConnect
  }


  addArticle(){
    if(this.newArticleName != "" && this.newArticleQty > 0 && this.newArticleQty <= 5)
    {
      let newItem = {
        name: this.newArticleName,
        qty: this.newArticleQty
      }

      if(newItem.name.charAt(newItem.name.length-1) != "s"){
        newItem.name = newItem.name + "s"
      }

      newItem.name = newItem.name.charAt(0).toUpperCase() + newItem.name.substring(1)

      this.listArticles = this.cartServ.addArticle(newItem)

    }
  }


  deleteArticle(name : string){
    this.listArticles = this.cartServ.deleteArticle(name)
  }

  login()
  {
    this.isConnect = this.fakeAuthServe.login()
  }

  logout()
  {
    this.isConnect = this.fakeAuthServe.logout()
  }
}
