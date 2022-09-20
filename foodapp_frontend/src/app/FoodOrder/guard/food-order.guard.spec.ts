import { TestBed } from '@angular/core/testing';

import { FoodOrderGuard } from './food-order.guard';

describe('FoodOrderGuard', () => {
  let guard: FoodOrderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FoodOrderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
