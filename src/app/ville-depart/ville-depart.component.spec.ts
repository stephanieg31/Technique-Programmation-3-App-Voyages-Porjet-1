import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleDepartComponent } from './ville-depart.component';

describe('VilleDepartComponent', () => {
  let component: VilleDepartComponent;
  let fixture: ComponentFixture<VilleDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VilleDepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
