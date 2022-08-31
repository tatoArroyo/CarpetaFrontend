import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabiladminisComponent } from './habiladminis.component';

describe('HabiladminisComponent', () => {
  let component: HabiladminisComponent;
  let fixture: ComponentFixture<HabiladminisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabiladminisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabiladminisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
