import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaladminisComponent } from './personaladminis.component';

describe('PersonaladminisComponent', () => {
  let component: PersonaladminisComponent;
  let fixture: ComponentFixture<PersonaladminisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaladminisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaladminisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
