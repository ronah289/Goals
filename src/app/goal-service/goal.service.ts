import { Injectable } from '@angular/core';
import { Goals } from '../goalList';
//register provider
@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goals
  }

  constructor() { }
}