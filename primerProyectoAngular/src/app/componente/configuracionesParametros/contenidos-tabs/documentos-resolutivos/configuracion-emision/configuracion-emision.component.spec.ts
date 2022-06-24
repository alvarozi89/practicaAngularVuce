import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionEmisionComponent } from './configuracion-emision.component';

describe('ConfiguracionEmisionComponent', () => {
  let component: ConfiguracionEmisionComponent;
  let fixture: ComponentFixture<ConfiguracionEmisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionEmisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionEmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
