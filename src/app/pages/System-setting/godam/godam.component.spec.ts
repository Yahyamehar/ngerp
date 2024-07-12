import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodamComponent } from './godam.component';

describe('GodamComponent', () => {
  let component: GodamComponent;
  let fixture: ComponentFixture<GodamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GodamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GodamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
