import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  serverCreationStatus = "No server was created";
  serverName = '';

  constructor() {
    console.log(this.allowNewServer);
    setTimeout(()=>{
    this.allowNewServer = true;
    console.log(this.allowNewServer);
  
    },2000);
    }

  onServerCreated(){
    this.serverCreationStatus = "Server was created!  The name is " + this.serverName;
    }

    onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    }


  ngOnInit() {
  }

}
