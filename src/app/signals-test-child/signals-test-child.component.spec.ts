import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsTestChildComponent } from './signals-test-child.component';

describe('SignalsTestChildComponent', () => {
  let component: SignalsTestChildComponent;
  let fixture: ComponentFixture<SignalsTestChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsTestChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsTestChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
