import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .white-color {
    color: white;
  }
`]
})
export class AppComponent {

  showSelected= true;

  countClicks = [];
  count = 0;
 // limit = 5;

  /*constructor() {
    this.showSelected = true;
    this.previousValue = this.showSelected;
  }*/

  onDisplayParagrah() {
      this.showSelected = !this.showSelected;
     // this.count++;
      this.countClicks.push(new Date());
  }

/*  getColor(): boolean {
    return this.limit <= this.count;
  }*/ 
}
