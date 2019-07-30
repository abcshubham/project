import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoplistComponent } from './moplist.component';

describe('MoplistComponent', () => {
  let component: MoplistComponent;
  let fixture: ComponentFixture<MoplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
