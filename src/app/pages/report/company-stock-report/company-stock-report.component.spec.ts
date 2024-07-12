import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStockReportComponent } from './company-stock-report.component';

describe('CompanyStockReportComponent', () => {
  let component: CompanyStockReportComponent;
  let fixture: ComponentFixture<CompanyStockReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyStockReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyStockReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
