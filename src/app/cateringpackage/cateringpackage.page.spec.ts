import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CateringpackagePage } from './cateringpackage.page';

describe('CateringpackagePage', () => {
  let component: CateringpackagePage;
  let fixture: ComponentFixture<CateringpackagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CateringpackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
