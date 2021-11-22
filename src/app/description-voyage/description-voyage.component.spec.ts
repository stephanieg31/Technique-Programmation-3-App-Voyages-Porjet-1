import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionVoyageComponent } from './description-voyage.component';

describe('DescriptionVoyageComponent', () => {
  let component: DescriptionVoyageComponent;
  let fixture: ComponentFixture<DescriptionVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
