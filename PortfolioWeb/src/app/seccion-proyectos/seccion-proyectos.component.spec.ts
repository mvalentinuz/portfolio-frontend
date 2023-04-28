import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionProyectosComponent } from './seccion-proyectos.component';

describe('SeccionProyectosComponent', () => {
  let component: SeccionProyectosComponent;
  let fixture: ComponentFixture<SeccionProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
