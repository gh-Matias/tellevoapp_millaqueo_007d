import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Saludo2Page } from './saludo2.page';

describe('Saludo2Page', () => {
  let component: Saludo2Page;
  let fixture: ComponentFixture<Saludo2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Saludo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
