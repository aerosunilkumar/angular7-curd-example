import { TestBed } from '@angular/core/testing';

import { NodeApiService } from './node-api.service';

describe('NodeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NodeApiService = TestBed.get(NodeApiService);
    expect(service).toBeTruthy();
  });
});
