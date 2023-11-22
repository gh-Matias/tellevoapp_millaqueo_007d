import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GooglemapPage } from './googlemap.page';

describe('GooglemapPage', () => {
  let component: GooglemapPage;
  let fixture: ComponentFixture<GooglemapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GooglemapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
