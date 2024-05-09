import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductorYoutubeComponent } from './reproductor-youtube.component';

describe('ReproductorYoutubeComponent', () => {
  let component: ReproductorYoutubeComponent;
  let fixture: ComponentFixture<ReproductorYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReproductorYoutubeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReproductorYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
