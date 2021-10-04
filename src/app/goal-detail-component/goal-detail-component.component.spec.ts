import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDetailComponentComponent } from './goal-detail-component.component';

describe('GoalDetailComponentComponent', () => {
  let component: GoalDetailComponentComponent;
  let fixture: ComponentFixture<GoalDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
