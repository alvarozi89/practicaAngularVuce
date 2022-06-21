import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosSubprocesosComponent } from './procesos-subprocesos.component';

describe('ProcesosSubprocesosComponent', () => {
  let component: ProcesosSubprocesosComponent;
  let fixture: ComponentFixture<ProcesosSubprocesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesosSubprocesosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesosSubprocesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
