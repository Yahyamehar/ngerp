import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinventoryorderingLevelComponent } from './createinventoryordering-level.component';

describe('CreateinventoryorderingLevelComponent', () => {
  let component: CreateinventoryorderingLevelComponent;
  let fixture: ComponentFixture<CreateinventoryorderingLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateinventoryorderingLevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateinventoryorderingLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
