import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { WeddingpackagePage } from './weddingpackage.page';

describe('WeddingpackagePage', () => {
  let component: WeddingpackagePage;
  let fixture: ComponentFixture<WeddingpackagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeddingpackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
