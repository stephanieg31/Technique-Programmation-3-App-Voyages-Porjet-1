import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeEtoileComponent } from './icone-etoile.component';

describe('IconeEtoileComponent', () => {
  let component: IconeEtoileComponent;
  let fixture: ComponentFixture<IconeEtoileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconeEtoileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconeEtoileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
