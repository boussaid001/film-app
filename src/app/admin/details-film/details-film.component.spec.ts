import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFilmComponent } from './details-film.component';

describe('DetailsFilmComponent', () => {
  let component: DetailsFilmComponent;
  let fixture: ComponentFixture<DetailsFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
