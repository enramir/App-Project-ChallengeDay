import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorLuzComponent } from './contadorLuz.component';

describe('ContadorLuzComponent', () => {
  let component: ContadorLuzComponent;
  let fixture: ComponentFixture<ContadorLuzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorLuzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorLuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
