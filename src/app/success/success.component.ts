//typescript import neccesary for angular components
import { Component, OnInit } from '@angular/core';

//typescript component decorator
@Component({
  selector:  'app-success',
  templateUrl:  './success.component.html',
  styleUrls:  ['./success.component.css']
})
//must export classes for use in app.module
export class SuccessComponent implements OnInit {
 
  constructor() {}
  ngOnInit() {}  
}
