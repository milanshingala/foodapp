import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBillComponent } from './email-bill.component';

describe('EmailBillComponent', () => {
  let component: EmailBillComponent;
  let fixture: ComponentFixture<EmailBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
