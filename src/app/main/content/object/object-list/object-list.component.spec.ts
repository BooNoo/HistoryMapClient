import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapObjectsListComponent } from './object-list.component';

describe('MapObjectsListComponent', () => {
  let component: MapObjectsListComponent;
  let fixture: ComponentFixture<MapObjectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapObjectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapObjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
