import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroIpenComponent } from './filtro-ipen.component';

describe('FiltroIpenComponent', () => {
  let component: FiltroIpenComponent;
  let fixture: ComponentFixture<FiltroIpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroIpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroIpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
