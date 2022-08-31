import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyecadminisComponent } from './proyecadminis.component';

describe('ProyecadminisComponent', () => {
  let component: ProyecadminisComponent;
  let fixture: ComponentFixture<ProyecadminisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyecadminisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyecadminisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
