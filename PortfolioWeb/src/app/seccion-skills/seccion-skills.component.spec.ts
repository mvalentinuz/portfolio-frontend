import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionSkillsComponent } from './seccion-skills.component';

describe('SeccionSkillsComponent', () => {
  let component: SeccionSkillsComponent;
  let fixture: ComponentFixture<SeccionSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
