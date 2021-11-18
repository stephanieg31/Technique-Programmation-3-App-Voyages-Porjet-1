import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitVedetteComponent } from './forfait-vedette.component';

describe('ForfaitVedetteComponent', () => {
  let component: ForfaitVedetteComponent;
  let fixture: ComponentFixture<ForfaitVedetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitVedetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitVedetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
