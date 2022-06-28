import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTramitePSComponent } from './gestion-tramite-ps.component';

describe('GestionTramitePSComponent', () => {
  let component: GestionTramitePSComponent;
  let fixture: ComponentFixture<GestionTramitePSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionTramitePSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionTramitePSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
