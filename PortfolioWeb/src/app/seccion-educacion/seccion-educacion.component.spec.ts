import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionEducacionComponent } from './seccion-educacion.component';

describe('SeccionEducacionComponent', () => {
  let component: SeccionEducacionComponent;
  let fixture: ComponentFixture<SeccionEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
