import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysitemsComponent } from './toysitems.component';

describe('ToysitemsComponent', () => {
  let component: ToysitemsComponent;
  let fixture: ComponentFixture<ToysitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToysitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
