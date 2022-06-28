import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionfirmasComponent } from './gestionfirmas.component';

describe('GestionfirmasComponent', () => {
  let component: GestionfirmasComponent;
  let fixture: ComponentFixture<GestionfirmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionfirmasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionfirmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
