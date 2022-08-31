import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesadminisComponent } from './botonesadminis.component';

describe('BotonesadminisComponent', () => {
  let component: BotonesadminisComponent;
  let fixture: ComponentFixture<BotonesadminisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesadminisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesadminisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
