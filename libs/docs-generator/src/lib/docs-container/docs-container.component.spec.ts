import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsContainerComponent } from './docs-container.component';

describe('DocsContainerComponent', () => {
  let component: DocsContainerComponent;
  let fixture: ComponentFixture<DocsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
