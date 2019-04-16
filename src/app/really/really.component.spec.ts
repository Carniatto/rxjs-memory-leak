import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallyComponent } from './really.component';

describe('ReallyComponent', () => {
  let component: ReallyComponent;
  let fixture: ComponentFixture<ReallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
