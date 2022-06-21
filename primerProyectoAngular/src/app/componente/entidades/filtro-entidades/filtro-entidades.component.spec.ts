import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroEntidadesComponent } from './filtro-entidades.component';

describe('FiltroEntidadesComponent', () => {
  let component: FiltroEntidadesComponent;
  let fixture: ComponentFixture<FiltroEntidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltroEntidadesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FiltroEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
