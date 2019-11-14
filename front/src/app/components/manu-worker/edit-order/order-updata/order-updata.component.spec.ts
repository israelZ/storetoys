import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUpdataComponent } from './order-updata.component';

describe('OrderUpdataComponent', () => {
  let component: OrderUpdataComponent;
  let fixture: ComponentFixture<OrderUpdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderUpdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderUpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
