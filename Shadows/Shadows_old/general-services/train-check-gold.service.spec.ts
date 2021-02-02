import { TestBed } from '@angular/core/testing';

import { TrainCheckGoldService } from './train-check-gold.service';
import { mockWarrior } from './mockWarrior';

describe('TrainCheckGoldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  
  it('should be created', () => {
    const service: TrainCheckGoldService = TestBed.get(TrainCheckGoldService);
    expect(service).toBeTruthy();//
  });
  it('should check gold amount', () => {
    const service: TrainCheckGoldService = TestBed.get(TrainCheckGoldService);
    let goldCheck1 = service.checkGold(mockWarrior, 2); //The price is 2
    let goldCheck2 = service.checkGold(mockWarrior, 14); //The price is 182
    let goldCheck3 = service.checkGold(mockWarrior, 15); //The price is 210
    expect(goldCheck1).toBeTruthy();
    expect(goldCheck2).toBeTruthy();
    expect(goldCheck3).toBeFalsy();
  });
});
