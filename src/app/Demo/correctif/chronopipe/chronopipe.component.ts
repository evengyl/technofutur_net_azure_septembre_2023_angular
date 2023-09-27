import { Component } from '@angular/core';

@Component({
  selector: 'app-chronopipe',
  templateUrl: './chronopipe.component.html',
  styleUrls: ['./chronopipe.component.scss']
})
export class ChronopipeComponent {

  time : number = 57
  timer : any

  start() {
    this.timer = setInterval(() => this.time++, 1000)
  }

  pause() {
    clearInterval(this.timer)
    this.timer = null
  }

  reset() {
    this.pause()
    this.time = 0
  }

}
