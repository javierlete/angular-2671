import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionComponent } from './valoracion.component';

describe('ValoracionComponent', () => {
  let component: ValoracionComponent;
  let fixture: ComponentFixture<ValoracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValoracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
