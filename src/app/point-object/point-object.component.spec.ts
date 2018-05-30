import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointObjectComponent } from './point-object.component';

describe('PointObjectComponent', () => {
  let component: PointObjectComponent;
  let fixture: ComponentFixture<PointObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
