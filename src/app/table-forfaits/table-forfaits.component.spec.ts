import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableForfaitsComponent } from './table-forfaits.component';

describe('TableForfaitsComponent', () => {
  let component: TableForfaitsComponent;
  let fixture: ComponentFixture<TableForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableForfaitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
