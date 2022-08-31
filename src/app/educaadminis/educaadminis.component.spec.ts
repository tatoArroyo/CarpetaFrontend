import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducaadminisComponent } from './educaadminis.component';

describe('EducaadminisComponent', () => {
  let component: EducaadminisComponent;
  let fixture: ComponentFixture<EducaadminisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducaadminisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducaadminisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
