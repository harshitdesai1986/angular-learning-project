import { TestBed, inject } from '@angular/core/testing';

import { UserCrudOperationsService } from './user-crud-operations.service';

describe('UserCrudOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCrudOperationsService]
    });
  });

  it('should be created', inject([UserCrudOperationsService], (service: UserCrudOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
