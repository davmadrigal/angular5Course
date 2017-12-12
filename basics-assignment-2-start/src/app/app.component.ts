import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: String;

  allowClickButton: boolean;

  constructor() {
    this.username = '';
    this.allowClickButton = false;
  }

  onResetValue() {
    this.username = '';
  }

  isDisabled(): boolean {
    return this.username === '';
  }
}
