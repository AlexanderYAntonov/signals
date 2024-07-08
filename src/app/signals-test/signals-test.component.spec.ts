import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsTestComponent } from './signals-test.component';

describe('SignalsTestComponent', () => {
  let component: SignalsTestComponent;
  let fixture: ComponentFixture<SignalsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
