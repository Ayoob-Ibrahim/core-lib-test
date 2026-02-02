import { TestBed } from '@angular/core/testing';

import { TranslationResolverService } from './translation-resolver.service';

describe('TranslationResolverService', () => {
  let service: TranslationResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
