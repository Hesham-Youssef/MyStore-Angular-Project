import { TestBed } from '@angular/core/testing';

import { DetailxitemService } from './detailxitem.service';

describe('DetailxitemService', () => {
  let service: DetailxitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailxitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
