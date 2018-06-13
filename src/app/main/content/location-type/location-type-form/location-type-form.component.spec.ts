import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTypeFormComponent } from './location-type-form.component';

describe('LocationTypeFormComponent', () => {
  let component: LocationTypeFormComponent;
  let fixture: ComponentFixture<LocationTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
