import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthExos5Service {


  isConnect : boolean = false

  constructor() {
    let connectState = localStorage.getItem('isConnect')
    if(connectState){
      this.isConnect = JSON.parse(connectState)
    }
  }

  login()
  {
    localStorage.setItem('isConnect', 'true')
    return this.isConnect = true
  }

  logout()
  {
    localStorage.setItem('isConnect', 'false')
    return this.isConnect = false
  }

}
