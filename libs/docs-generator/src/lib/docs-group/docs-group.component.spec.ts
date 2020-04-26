import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsGroupComponent } from './docs-group.component';

describe('DocsGroupComponent', () => {
  let component: DocsGroupComponent;
  let fixture: ComponentFixture<DocsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
