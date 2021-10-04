import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Goals'
  goals!:string[];
  constructor(){
    this.goals = ['buy watch','buy phone','buy shoes','attend meeting'];
  }
}
