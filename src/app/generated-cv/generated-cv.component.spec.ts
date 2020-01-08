import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedCvComponent } from './generated-cv.component';

describe('GeneratedCvComponent', () => {
  let component: GeneratedCvComponent;
  let fixture: ComponentFixture<GeneratedCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
