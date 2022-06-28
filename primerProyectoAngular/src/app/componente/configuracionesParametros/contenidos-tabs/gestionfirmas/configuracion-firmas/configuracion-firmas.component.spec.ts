import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionFirmasComponent } from './configuracion-firmas.component';

describe('ConfiguracionFirmasComponent', () => {
  let component: ConfiguracionFirmasComponent;
  let fixture: ComponentFixture<ConfiguracionFirmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionFirmasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionFirmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
