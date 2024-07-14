import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderConfigPage } from './order-config.page';

describe('OrderConfigPage', () => {
  let component: OrderConfigPage;
  let fixture: ComponentFixture<OrderConfigPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
