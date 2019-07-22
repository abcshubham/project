import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscationExpenseComponent } from './transcation-expense.component';

describe('TranscationExpenseComponent', () => {
  let component: TranscationExpenseComponent;
  let fixture: ComponentFixture<TranscationExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscationExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscationExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
