import { TestBed } from '@angular/core/testing';

import { HelpForumService } from './help-forum.service';

describe('HelpForumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelpForumService = TestBed.get(HelpForumService);
    expect(service).toBeTruthy();
  });
});