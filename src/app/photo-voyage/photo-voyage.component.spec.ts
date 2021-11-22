import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoVoyageComponent } from './photo-voyage.component';

describe('PhotoVoyageComponent', () => {
  let component: PhotoVoyageComponent;
  let fixture: ComponentFixture<PhotoVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
