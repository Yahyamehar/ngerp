import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleentryComponent } from './saleentry.component';

describe('SaleentryComponent', () => {
  let component: SaleentryComponent;
  let fixture: ComponentFixture<SaleentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleentryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
