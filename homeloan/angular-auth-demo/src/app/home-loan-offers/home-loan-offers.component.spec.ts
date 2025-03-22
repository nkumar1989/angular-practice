import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanOffersComponent } from './home-loan-offers.component';

describe('HomeLoanOffersComponent', () => {
  let component: HomeLoanOffersComponent;
  let fixture: ComponentFixture<HomeLoanOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLoanOffersComponent]
    });
    fixture = TestBed.createComponent(HomeLoanOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
