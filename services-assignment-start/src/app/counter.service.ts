import { OnInit } from '@angular/core';

export class CounterService {
  private count = 0;

  constructor() {}



  logOperation(operation: string) {
    this.count += 1;
    console.log('Operation executed: ' + operation + ', times: ' + this.count);
  }

}
