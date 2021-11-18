import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomHotelComponent } from './nom-hotel.component';

describe('NomHotelComponent', () => {
  let component: NomHotelComponent;
  let fixture: ComponentFixture<NomHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
