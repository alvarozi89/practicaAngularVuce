import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPsComponent } from './consultar-ps.component';

describe('ConsultarPsComponent', () => {
  let component: ConsultarPsComponent;
  let fixture: ComponentFixture<ConsultarPsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
