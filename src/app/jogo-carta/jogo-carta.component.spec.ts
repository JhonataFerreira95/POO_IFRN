import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoCartaComponent } from './jogo-carta.component';

describe('JogoCartaComponent', () => {
  let component: JogoCartaComponent;
  let fixture: ComponentFixture<JogoCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogoCartaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogoCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
