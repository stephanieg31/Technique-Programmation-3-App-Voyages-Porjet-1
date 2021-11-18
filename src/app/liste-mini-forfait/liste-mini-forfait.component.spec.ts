import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMiniForfaitComponent } from './liste-mini-forfait.component';

describe('ListeMiniForfaitComponent', () => {
  let component: ListeMiniForfaitComponent;
  let fixture: ComponentFixture<ListeMiniForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMiniForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMiniForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
