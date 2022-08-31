import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaradminisComponent } from './navbaradminis.component';

describe('NavbaradminisComponent', () => {
  let component: NavbaradminisComponent;
  let fixture: ComponentFixture<NavbaradminisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaradminisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbaradminisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
