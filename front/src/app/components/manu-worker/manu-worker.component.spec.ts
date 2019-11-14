import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuWorkerComponent } from './manu-worker.component';

describe('ManuWorkerComponent', () => {
  let component: ManuWorkerComponent;
  let fixture: ComponentFixture<ManuWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManuWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
