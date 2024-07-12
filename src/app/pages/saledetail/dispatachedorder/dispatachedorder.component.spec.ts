import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatachedorderComponent } from './dispatachedorder.component';

describe('DispatachedorderComponent', () => {
  let component: DispatachedorderComponent;
  let fixture: ComponentFixture<DispatachedorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispatachedorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispatachedorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
