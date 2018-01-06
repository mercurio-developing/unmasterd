import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EirComponent } from './eir.component';

describe('EirComponent', () => {
  let component: EirComponent;
  let fixture: ComponentFixture<EirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
