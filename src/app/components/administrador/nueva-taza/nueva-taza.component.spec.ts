import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTazaComponent } from './nueva-taza.component';

describe('NuevaTazaComponent', () => {
  let component: NuevaTazaComponent;
  let fixture: ComponentFixture<NuevaTazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaTazaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
