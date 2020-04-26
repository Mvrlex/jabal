import { async, TestBed } from '@angular/core/testing';
import { DocsGeneratorModule } from './docs-generator.module';

describe('DocsGeneratorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DocsGeneratorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DocsGeneratorModule).toBeDefined();
  });
});
