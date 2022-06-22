import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsNumberComponent } from './tabs-number.component';

describe('TabsNumberComponent', () => {
  let component: TabsNumberComponent;
  let fixture: ComponentFixture<TabsNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsNumberComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TabsNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
