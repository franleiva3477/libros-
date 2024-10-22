import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosEditadoComponent } from './libros-editado.component';

describe('LibrosEditadoComponent', () => {
  let component: LibrosEditadoComponent;
  let fixture: ComponentFixture<LibrosEditadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrosEditadoComponent]
    });
    fixture = TestBed.createComponent(LibrosEditadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
