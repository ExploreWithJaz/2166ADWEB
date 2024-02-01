import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinuspageComponent } from './joinuspage.component';

describe('JoinuspageComponent', () => {
  let component: JoinuspageComponent;
  let fixture: ComponentFixture<JoinuspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinuspageComponent]
    });
    fixture = TestBed.createComponent(JoinuspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
