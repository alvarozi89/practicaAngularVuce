import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCadenaComponent } from './filtro-cadena.component';

describe('FiltroCadenaComponent', () => {
  let component: FiltroCadenaComponent;
  let fixture: ComponentFixture<FiltroCadenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroCadenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroCadenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
