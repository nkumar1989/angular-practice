import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeLoanDetailsComponent } from './user-home-loan-details.component';

describe('UserHomeLoanDetailsComponent', () => {
  let component: UserHomeLoanDetailsComponent;
  let fixture: ComponentFixture<UserHomeLoanDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserHomeLoanDetailsComponent]
    });
    fixture = TestBed.createComponent(UserHomeLoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
