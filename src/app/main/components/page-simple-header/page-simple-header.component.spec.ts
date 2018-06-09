import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSimpleHeaderComponent } from './page-simple-header.component';

describe('PageSimpleHeaderComponent', () => {
  let component: PageSimpleHeaderComponent;
  let fixture: ComponentFixture<PageSimpleHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSimpleHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSimpleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
