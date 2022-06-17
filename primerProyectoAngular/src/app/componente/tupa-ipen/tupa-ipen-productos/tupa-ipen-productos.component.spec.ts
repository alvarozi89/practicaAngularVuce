import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TupaIpenProductosComponent } from './tupa-ipen-productos.component';

describe('TupaIpenProductosComponent', () => {
  let component: TupaIpenProductosComponent;
  let fixture: ComponentFixture<TupaIpenProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TupaIpenProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TupaIpenProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
