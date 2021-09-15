import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTazaComponent } from './editar-taza.component';

describe('EditarTazaComponent', () => {
  let component: EditarTazaComponent;
  let fixture: ComponentFixture<EditarTazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTazaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
