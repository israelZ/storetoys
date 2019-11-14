import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuyComponent } from './list-buy.component';

describe('ListBuyComponent', () => {
  let component: ListBuyComponent;
  let fixture: ComponentFixture<ListBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
