import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangecategoryComponent } from './changecategory.component';

describe('ChangecategoryComponent', () => {
  let component: ChangecategoryComponent;
  let fixture: ComponentFixture<ChangecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
