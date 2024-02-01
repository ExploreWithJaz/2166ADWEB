import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerspageComponent } from './partnerspage.component';

describe('PartnerspageComponent', () => {
  let component: PartnerspageComponent;
  let fixture: ComponentFixture<PartnerspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerspageComponent]
    });
    fixture = TestBed.createComponent(PartnerspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
