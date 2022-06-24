import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaSeguimientoTramiteComponent } from './plantilla-seguimiento-tramite.component';

describe('PlantillaSeguimientoTramiteComponent', () => {
  let component: PlantillaSeguimientoTramiteComponent;
  let fixture: ComponentFixture<PlantillaSeguimientoTramiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaSeguimientoTramiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaSeguimientoTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
