import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAreasComponent } from './gestion-areas.component';

describe('GestionAreasComponent', () => {
  let component: GestionAreasComponent;
  let fixture: ComponentFixture<GestionAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
