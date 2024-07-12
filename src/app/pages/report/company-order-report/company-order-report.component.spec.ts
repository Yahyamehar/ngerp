import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOrderReportComponent } from './company-order-report.component';

describe('CompanyOrderReportComponent', () => {
  let component: CompanyOrderReportComponent;
  let fixture: ComponentFixture<CompanyOrderReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyOrderReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyOrderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
