import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirTazasComponent } from './pedir-tazas.component';

describe('PedirTazasComponent', () => {
  let component: PedirTazasComponent;
  let fixture: ComponentFixture<PedirTazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedirTazasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirTazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
