import { async, TestBed } from '@angular/core/testing';
import { JabalModule } from './jabal.module';

describe('JabalModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [JabalModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(JabalModule).toBeDefined();
  });
});
