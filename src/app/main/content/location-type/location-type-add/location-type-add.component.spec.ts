import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTypeAddComponent } from './location-type-add.component';

describe('LocationTypeAddComponent', () => {
  let component: LocationTypeAddComponent;
  let fixture: ComponentFixture<LocationTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
