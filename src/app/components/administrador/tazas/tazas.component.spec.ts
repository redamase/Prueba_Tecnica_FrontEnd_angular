import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TazasComponent } from './tazas.component';

describe('TazasComponent', () => {
  let component: TazasComponent;
  let fixture: ComponentFixture<TazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TazasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
