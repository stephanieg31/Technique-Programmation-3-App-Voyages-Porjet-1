import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitCanadaComponent } from './forfait-canada.component';

describe('ForfaitCanadaComponent', () => {
  let component: ForfaitCanadaComponent;
  let fixture: ComponentFixture<ForfaitCanadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitCanadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
