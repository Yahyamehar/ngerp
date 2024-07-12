import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchOrderReportComponent } from './branch-order-report.component';

describe('BranchOrderReportComponent', () => {
  let component: BranchOrderReportComponent;
  let fixture: ComponentFixture<BranchOrderReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchOrderReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchOrderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
