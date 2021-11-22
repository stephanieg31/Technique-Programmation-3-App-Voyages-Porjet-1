import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixRabaisComponent } from './prix-rabais.component';

describe('PrixRabaisComponent', () => {
  let component: PrixRabaisComponent;
  let fixture: ComponentFixture<PrixRabaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrixRabaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixRabaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
