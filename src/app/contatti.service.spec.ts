import { TestBed } from '@angular/core/testing';

import { ContattiService } from './contatti.service';

describe('ContattiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContattiService = TestBed.get(ContattiService);
    expect(service).toBeTruthy();
  });
});
