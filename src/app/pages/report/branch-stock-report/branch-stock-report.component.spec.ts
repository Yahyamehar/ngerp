import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchStockReportComponent } from './branch-stock-report.component';

describe('BranchStockReportComponent', () => {
  let component: BranchStockReportComponent;
  let fixture: ComponentFixture<BranchStockReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchStockReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchStockReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
