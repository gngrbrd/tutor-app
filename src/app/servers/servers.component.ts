import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = "No server was created";
  serverName = '';
  servers = ['One','Two'];

  constructor() {
    console.log(this.allowNewServer);
    setTimeout(()=>{
    this.allowNewServer = true;
    console.log(this.allowNewServer);
  
    },2000);
    }

    onServerCreated(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created!  The name is " + this.serverName;
    }

    onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    }


  ngOnInit() {
  }

}
