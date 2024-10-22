import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosAgregadoComponent } from './libros-agregado.component';

describe('LibrosAgregadoComponent', () => {
  let component: LibrosAgregadoComponent;
  let fixture: ComponentFixture<LibrosAgregadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrosAgregadoComponent]
    });
    fixture = TestBed.createComponent(LibrosAgregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
