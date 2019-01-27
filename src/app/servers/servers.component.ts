import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // element <app-server>
  // selector: '[app-servers]', css style selector <div app-servers>
  // selector: '.app-servers', css class selector <div class="app-servers">
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server created';
  serverName: string = 'Test Server';
  serverCreated: boolean = false;

  servers = [ 'Testserver', 'Testserver 2'];


  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created ${this.serverName}`;
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
