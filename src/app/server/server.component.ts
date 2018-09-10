import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;

  serverStatus:  string = 'offline'; 
  serverId:  number = 10;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';

  }
  getCssClass(){
    return this.serverStatus === 'online' ? 'alert alert-success' : 'alert alert-warning';

  }
    getServerStatus(){
      return this.serverStatus;
    }
    

  ngOnInit() {
  }

}
