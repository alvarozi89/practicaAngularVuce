import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesFrecuentesComponent } from './tramites-frecuentes.component';

describe('TramitesFrecuentesComponent', () => {
  let component: TramitesFrecuentesComponent;
  let fixture: ComponentFixture<TramitesFrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TramitesFrecuentesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TramitesFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
