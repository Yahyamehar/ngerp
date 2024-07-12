import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSaleReportComponent } from './user-sale-report.component';

describe('UserSaleReportComponent', () => {
  let component: UserSaleReportComponent;
  let fixture: ComponentFixture<UserSaleReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSaleReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSaleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
