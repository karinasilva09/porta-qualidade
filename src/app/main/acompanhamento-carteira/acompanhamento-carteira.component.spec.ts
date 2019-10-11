import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoCarteiraComponent } from './acompanhamento-carteira.component';

describe('AcompanhamentoCarteiraComponent', () => {
  let component: AcompanhamentoCarteiraComponent;
  let fixture: ComponentFixture<AcompanhamentoCarteiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanhamentoCarteiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanhamentoCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
