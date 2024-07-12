import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedreturnComponent } from './approvedreturn.component';

describe('ApprovedreturnComponent', () => {
  let component: ApprovedreturnComponent;
  let fixture: ComponentFixture<ApprovedreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovedreturnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprovedreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
