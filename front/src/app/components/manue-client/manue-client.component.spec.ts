import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManueClientComponent } from './manue-client.component';

describe('ManueClientComponent', () => {
  let component: ManueClientComponent;
  let fixture: ComponentFixture<ManueClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManueClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManueClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
