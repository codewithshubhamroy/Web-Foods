import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderInfoComponent } from './view-order-info.component';

describe('ViewOrderInfoComponent', () => {
  let component: ViewOrderInfoComponent;
  let fixture: ComponentFixture<ViewOrderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrderInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
