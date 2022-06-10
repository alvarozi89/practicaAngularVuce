import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIpenComponent } from './card-ipen.component';

describe('CardIpenComponent', () => {
  let component: CardIpenComponent;
  let fixture: ComponentFixture<CardIpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
