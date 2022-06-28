import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroMisSolicitudesComponent } from './filtro-mis-solicitudes.component';

describe('FiltroMisSolicitudesComponent', () => {
  let component: FiltroMisSolicitudesComponent;
  let fixture: ComponentFixture<FiltroMisSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroMisSolicitudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroMisSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
