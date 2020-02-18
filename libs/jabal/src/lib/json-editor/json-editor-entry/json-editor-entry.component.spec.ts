import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonEditorEntryComponent } from './json-editor-entry.component';

describe('JsonEditorEntryComponent', () => {
  let component: JsonEditorEntryComponent;
  let fixture: ComponentFixture<JsonEditorEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonEditorEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonEditorEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
