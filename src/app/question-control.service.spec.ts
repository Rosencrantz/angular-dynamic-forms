import { TestBed } from '@angular/core/testing';

import { QuestionControlService } from './question-control.service';

describe('QuestionControlServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionControlService = TestBed.get(QuestionControlService);
    expect(service).toBeTruthy();
  });
});
