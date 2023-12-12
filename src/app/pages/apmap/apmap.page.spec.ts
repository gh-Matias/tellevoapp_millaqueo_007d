import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApmapPage } from './apmap.page';

describe('ApmapPage', () => {
  let component: ApmapPage;
  let fixture: ComponentFixture<ApmapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
