import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinventoryorderComponent } from './createinventoryorder.component';

describe('CreateinventoryorderComponent', () => {
  let component: CreateinventoryorderComponent;
  let fixture: ComponentFixture<CreateinventoryorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateinventoryorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateinventoryorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
