import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dados } from './dados';

describe('Dados', () => {
  let component: Dados;
  let fixture: ComponentFixture<Dados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
