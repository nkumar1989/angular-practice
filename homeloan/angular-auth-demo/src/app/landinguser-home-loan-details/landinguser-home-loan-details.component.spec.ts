import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandinguserHomeLoanDetailsComponent } from './landinguser-home-loan-details.component';

describe('LandinguserHomeLoanDetailsComponent', () => {
  let component: LandinguserHomeLoanDetailsComponent;
  let fixture: ComponentFixture<LandinguserHomeLoanDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandinguserHomeLoanDetailsComponent]
    });
    fixture = TestBed.createComponent(LandinguserHomeLoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
