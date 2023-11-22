import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConductorformPage } from './conductorform.page';

describe('ConductorformPage', () => {
  let component: ConductorformPage;
  let fixture: ComponentFixture<ConductorformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConductorformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
