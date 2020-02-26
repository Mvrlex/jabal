import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocContentComponent } from './doc-content.component';

describe('DocContentComponent', () => {
  let component: DocContentComponent;
  let fixture: ComponentFixture<DocContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
