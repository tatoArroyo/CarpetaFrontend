import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboraladminisComponent } from './laboraladminis.component';

describe('LaboraladminisComponent', () => {
  let component: LaboraladminisComponent;
  let fixture: ComponentFixture<LaboraladminisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboraladminisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboraladminisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
