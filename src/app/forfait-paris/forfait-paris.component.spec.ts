import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitParisComponent } from './forfait-paris.component';

describe('ForfaitParisComponent', () => {
  let component: ForfaitParisComponent;
  let fixture: ComponentFixture<ForfaitParisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitParisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
