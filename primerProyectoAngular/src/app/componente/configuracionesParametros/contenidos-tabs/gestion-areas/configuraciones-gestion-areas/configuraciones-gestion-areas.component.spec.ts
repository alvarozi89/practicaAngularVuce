import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionesGestionAreasComponent } from './configuraciones-gestion-areas.component';

describe('ConfiguracionesGestionAreasComponent', () => {
  let component: ConfiguracionesGestionAreasComponent;
  let fixture: ComponentFixture<ConfiguracionesGestionAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionesGestionAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionesGestionAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
