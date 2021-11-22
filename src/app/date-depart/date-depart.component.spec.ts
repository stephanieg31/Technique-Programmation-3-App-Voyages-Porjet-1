import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDepartComponent } from './date-depart.component';

describe('DateDepartComponent', () => {
  let component: DateDepartComponent;
  let fixture: ComponentFixture<DateDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateDepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
