import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyHomeLoanComponent } from './apply-home-loan.component';

describe('ApplyHomeLoanComponent', () => {
  let component: ApplyHomeLoanComponent;
  let fixture: ComponentFixture<ApplyHomeLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyHomeLoanComponent]
    });
    fixture = TestBed.createComponent(ApplyHomeLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
