import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadesCardComponent } from './entidades-card.component';

describe('EntidadesCardComponent', () => {
  let component: EntidadesCardComponent;
  let fixture: ComponentFixture<EntidadesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntidadesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntidadesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
