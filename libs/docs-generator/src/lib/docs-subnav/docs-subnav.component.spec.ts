import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsSubnavComponent } from './docs-subnav.component';

describe('DocsSubnavComponent', () => {
  let component: DocsSubnavComponent;
  let fixture: ComponentFixture<DocsSubnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsSubnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsSubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
