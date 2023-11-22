import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasajeroformPage } from './pasajeroform.page';

describe('PasajeroformPage', () => {
  let component: PasajeroformPage;
  let fixture: ComponentFixture<PasajeroformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasajeroformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
