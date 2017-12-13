import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'NoServerCreationStatus!';
  serverName = 'test';
  serverCreated = false;
  servers = ['TesteSever1', 'TestServer2'];
  constructor() { 
    setTimeout(() => {
        this.allowNewServer =true;
      }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'ServerCreated! with name: ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
