import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmopComponent } from './addmop.component';

describe('AddmopComponent', () => {
  let component: AddmopComponent;
  let fixture: ComponentFixture<AddmopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
