import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { SeguroPipe } from '../../pipes/seguro.pipe';
import { ReproductorComponent } from './reproductor.component';

describe('ReproductorComponent', () => {
  let component: ReproductorComponent;
  let fixture: ComponentFixture<ReproductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReproductorComponent, SeguroPipe],
      imports: [HttpClientModule, AppRoutingModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
