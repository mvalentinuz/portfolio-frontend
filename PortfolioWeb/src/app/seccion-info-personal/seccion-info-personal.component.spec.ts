import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionInfoPersonalComponent } from './seccion-info-personal.component';

describe('SeccionInfoPersonalComponent', () => {
  let component: SeccionInfoPersonalComponent;
  let fixture: ComponentFixture<SeccionInfoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionInfoPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionInfoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
