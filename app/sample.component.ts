import {Component} from '@angular/core';

@Component({
	selector : 'sample',
	template : `
	           <div class="container" *ngIf = "showHeader">
                <h1>This is my sample page</h1>
                <br>
                He is {{name}}
                <img [src] = "imageUrl" /><br>
                 <input type="text"  [(ngModel)]="realName" (keyup.enter)="getValues($event)">
                <button class ="btn btn-primary" (click) = "runMe()">Click Me</button>
               
               {{realName}}
               <br>
               <ul *ngFor = " let item of items ">
               <li>{{item}}</li>
               </ul>
                </div>
	            `
})

export class SampleComponent{
	private name : string;
	private imageUrl : string;
	private value : string;
  private realName :string;
  private showHeader : boolean;
  private items :string[];
  constructor(){
  	this.name ="Papa srinivas";
  	this.imageUrl = "http://lorempixel.com/400/200";
    this.realName ="puspalata";
    this.showHeader = true;
    this.items = ["pooja" , "liza" ,"mansi"];

  }
getValues(uma:any){
	this.value = uma.target.value;
console.log(uma.target.value);
}
  runMe(){
  	console.log("hey wait !!!, did you click me?");
  }
}