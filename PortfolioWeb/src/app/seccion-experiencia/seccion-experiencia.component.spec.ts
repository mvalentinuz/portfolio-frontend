import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionExperienciaComponent } from './seccion-experiencia.component';

describe('SeccionExperienciaComponent', () => {
  let component: SeccionExperienciaComponent;
  let fixture: ComponentFixture<SeccionExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
