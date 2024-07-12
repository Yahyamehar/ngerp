import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryreturnComponent } from './inventoryreturn.component';

describe('InventoryreturnComponent', () => {
  let component: InventoryreturnComponent;
  let fixture: ComponentFixture<InventoryreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryreturnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
