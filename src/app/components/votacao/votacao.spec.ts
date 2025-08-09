import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Votacao } from './votacao';

describe('Votacao', () => {
  let component: Votacao;
  let fixture: ComponentFixture<Votacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Votacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Votacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
