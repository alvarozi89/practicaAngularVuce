import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TupaIpenComponent } from './tupa-ipen.component';

describe('TupaIpenComponent', () => {
  let component: TupaIpenComponent;
  let fixture: ComponentFixture<TupaIpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TupaIpenComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TupaIpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
