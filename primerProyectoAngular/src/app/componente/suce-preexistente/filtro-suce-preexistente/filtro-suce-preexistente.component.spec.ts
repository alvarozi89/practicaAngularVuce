import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroSucePreexistenteComponent } from './filtro-suce-preexistente.component';

describe('FiltroSucePreexistenteComponent', () => {
  let component: FiltroSucePreexistenteComponent;
  let fixture: ComponentFixture<FiltroSucePreexistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroSucePreexistenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroSucePreexistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
