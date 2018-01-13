import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProjectsComponent } from './child-projects.component';

describe('ChildProjectsComponent', () => {
  let component: ChildProjectsComponent;
  let fixture: ComponentFixture<ChildProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
