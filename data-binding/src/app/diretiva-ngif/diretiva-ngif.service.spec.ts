import { TestBed, inject } from '@angular/core/testing';

import { DiretivangIfService } from './diretivang-if.service';

describe('DiretivangIfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiretivangIfService]
    });
  });

  it('should be created', inject([DiretivangIfService], (service: DiretivangIfService) => {
    expect(service).toBeTruthy();
  }));
});
