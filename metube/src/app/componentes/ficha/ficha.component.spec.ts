import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoutingModule } from '../../app-routing.module';
import { FichaComponent } from './ficha.component';

describe('FichaComponent', () => {
  let component: FichaComponent;
  let fixture: ComponentFixture<FichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FichaComponent],
      imports: [AppRoutingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener una valoración', () => {
    const fixture = TestBed.createComponent(FichaComponent);
    const ficha = fixture.componentInstance;

    ficha.video = {
      "id": 1,
      "titulo": "Smoke On The Water",
      "codigo": "Q2FzZSBD5LE",
      "foto": "https://fmrockandpop.com/media/k2/items/cache/b31a1e0cb6278e5bc3b5270b10883131_L.webp?t=20240304_141819",
      "horas": 0,
      "minutos": 6,
      "segundos": 15,
      "descripcion": "Emblemática canción de Deep Purple",
      "valoracion": 10,
    };

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const valorEsperado = 'Valoración: 10'
    const valorEncontrado = compiled.querySelector('p:last-child')?.textContent;

    expect(valorEncontrado).toEqual(valorEsperado);
  });
});
