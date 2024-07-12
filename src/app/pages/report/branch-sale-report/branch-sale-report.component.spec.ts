import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchSaleReportComponent } from './branch-sale-report.component';

describe('BranchSaleReportComponent', () => {
  let component: BranchSaleReportComponent;
  let fixture: ComponentFixture<BranchSaleReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchSaleReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchSaleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
