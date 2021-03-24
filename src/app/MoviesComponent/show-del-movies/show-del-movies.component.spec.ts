import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelMoviesComponent } from './show-del-movies.component';

describe('ShowDelMoviesComponent', () => {
  let component: ShowDelMoviesComponent;
  let fixture: ComponentFixture<ShowDelMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
