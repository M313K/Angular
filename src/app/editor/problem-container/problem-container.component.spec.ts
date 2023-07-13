import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemContainerComponent } from './problem-container.component';

describe('ProblemContainerComponent', () => {
  let component: ProblemContainerComponent;
  let fixture: ComponentFixture<ProblemContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemContainerComponent]
    });
    fixture = TestBed.createComponent(ProblemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
