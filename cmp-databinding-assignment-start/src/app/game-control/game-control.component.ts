import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  incrementValue = 0;
  id;

  @Output() onIncrement = new EventEmitter<{valueIncrement: number}>();
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    console.log('Starting game');
    this.id = setInterval(() => {
      console.log('value: ' + this.incrementValue),
      this.onIncrement.emit(
          {valueIncrement: this.incrementValue += 1}
        ); }, 1000);
  }

  onStopGame() {
    if (this.id) {
      console.log('Stop game');
      console.log('value: ' + this.incrementValue),
      clearInterval(this.id);
    //  this.incrementValue = 0;
    }
  }

}
