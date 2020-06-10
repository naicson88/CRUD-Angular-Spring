import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicioanarComponent } from './adicioanar.component';

describe('AdicioanarComponent', () => {
  let component: AdicioanarComponent;
  let fixture: ComponentFixture<AdicioanarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicioanarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicioanarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
