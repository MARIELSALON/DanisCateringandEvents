import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BirthdaypackagePage } from './birthdaypackage.page';

describe('BirthdaypackagePage', () => {
  let component: BirthdaypackagePage;
  let fixture: ComponentFixture<BirthdaypackagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BirthdaypackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
