import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingLevelComponent } from './ordering-level.component';

describe('OrderingLevelComponent', () => {
  let component: OrderingLevelComponent;
  let fixture: ComponentFixture<OrderingLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderingLevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderingLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
