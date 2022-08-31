import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvapplincesComponent } from './tvapplinces.component';

describe('TvapplincesComponent', () => {
  let component: TvapplincesComponent;
  let fixture: ComponentFixture<TvapplincesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvapplincesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvapplincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
