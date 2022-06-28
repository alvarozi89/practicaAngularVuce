import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosResolutivosComponent } from './documentos-resolutivos.component';

describe('DocumentosResolutivosComponent', () => {
  let component: DocumentosResolutivosComponent;
  let fixture: ComponentFixture<DocumentosResolutivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosResolutivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosResolutivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
