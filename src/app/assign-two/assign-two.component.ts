import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-two',
  templateUrl: './assign-two.component.html',
  styleUrls: ['./assign-two.component.css']
})
export class AssignTwoComponent implements OnInit {
  username='';
    constructor() {
    this.username='';
    }

    onInput($event){
    console.log(event);
    }



  ngOnInit() {
  }

}
