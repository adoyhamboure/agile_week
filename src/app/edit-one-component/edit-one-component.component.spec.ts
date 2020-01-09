import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOneComponentComponent } from './edit-one-component.component';

describe('EditOneComponentComponent', () => {
  let component: EditOneComponentComponent;
  let fixture: ComponentFixture<EditOneComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOneComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
