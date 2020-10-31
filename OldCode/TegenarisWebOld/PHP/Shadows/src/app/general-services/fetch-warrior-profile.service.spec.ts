import { TestBed } from '@angular/core/testing';
import { FetchWarriorProfileService } from './fetch-warrior-profile.service';

describe('FetchWarriorProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchWarriorProfileService = TestBed.get(FetchWarriorProfileService);
    expect(service).toBeTruthy();
  });
});
