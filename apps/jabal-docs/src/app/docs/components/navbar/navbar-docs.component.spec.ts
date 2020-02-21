import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDocsComponent } from './navbar-docs.component';

describe('NavbarComponent', () => {
  let component: NavbarDocsComponent;
  let fixture: ComponentFixture<NavbarDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
