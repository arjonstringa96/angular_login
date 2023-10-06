import { TestBed } from '@angular/core/testing';

import { NebulaService } from './nebula.service';

describe('NebulaService', () => {
  let service: NebulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NebulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
