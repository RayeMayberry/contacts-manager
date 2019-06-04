import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneLookupComponent } from './phone-lookup.component';

describe('PhoneLookupComponent', () => {
  let component: PhoneLookupComponent;
  let fixture: ComponentFixture<PhoneLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
