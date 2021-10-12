import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { Goal } from '../goal';
import { Quote } from '../quote-class/quote';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  providers: [GoalService]
})
export class GoalComponent implements OnInit {
  // goals: Goal[] = [
  //   new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2020, 3, 14)),
  //   new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2019, 6, 9)),
  //   new Goal(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date(2022, 1, 12)),
  //   new Goal(4, 'Get Dog Food', 'Pupper likes expensive snacks', new Date(2019, 0, 18)),
  //   new Goal(5, 'Solve math homework', 'Damn Math', new Date(2019, 2, 14)),
  //   new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date(2030, 3, 14)),
  // ];
  goals:Goal[];
  alertService:AlertService;
  quote!: Quote;

  constructor(goalService:GoalService,alertService:AlertService,private http:HttpClient) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }
  
  addNewGoal(goal:any){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index: any) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: any, index: number) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }
  deleteGoal(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1);
        this.alertService.alertMe("The goal has been deleted");
      }
    }
  }

  ngOnInit(): void {
    interface ApiResponse{
      author:string;
      quote:string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quote(data.author, data.quote)
    })
  }
  

}
