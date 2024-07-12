import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransferedComponent } from './viewtransfered.component';

describe('ViewtransferedComponent', () => {
  let component: ViewtransferedComponent;
  let fixture: ComponentFixture<ViewtransferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewtransferedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewtransferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
