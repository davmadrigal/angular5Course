import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentElements = Array<{type: string, value: string}>();

  //componentElements = [{type: string, name: string, content: 'Just a Server'}];
  onAddComponent(incrementData: {valueIncrement: number}) {
    console.log('app component, increment value ' + incrementData.valueIncrement);
    if (incrementData.valueIncrement % 2 === 0) {
        this.componentElements.push({
          type: 'even',
          value: 'Number' + incrementData.valueIncrement
        });
    }else {
      this.componentElements.push({
        type: 'odd',
        value: 'Number' + incrementData.valueIncrement
      });
    }
  }
}
