import { Component, OnInit } from '@angular/core';

@Component({
  selector:  'app-assign-three',
  templateUrl:  './assign-three.component.html',
  styleUrls:  ['./assign-three.component.css']
  }) 

  export class AssignThreeComponent {
 
  btnToggle = true;
  strTime =[];
  styleColor = 'blue';
  private clickCount:  number = 0;

  
  contructor() { }


   public onDisplay($event){

     this.btnToggle = this.btnToggle ? false : true;
     this.strTime.push(Date.now());
     console.log(this.clickCount);
     this.clickCount = this.strTime.length;
     console.log(this.getCssClass());
   }
   getColor(item: number[]){

     return item[item.length-1] > item[0] + 5000 ? 'blue' : 'white'; 
   
     }

     getCssClass(){
       return  this.clickCount > 5 ? true : false;
     }
    

   ngOnInit() { }
  }
