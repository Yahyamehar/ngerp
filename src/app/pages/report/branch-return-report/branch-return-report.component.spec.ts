import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchReturnReportComponent } from './branch-return-report.component';

describe('BranchReturnReportComponent', () => {
  let component: BranchReturnReportComponent;
  let fixture: ComponentFixture<BranchReturnReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchReturnReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchReturnReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
