import { Injectable } from '@angular/core';


export class LogginService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
