import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLuzComponent } from './create-luz.component';

describe('CreateLuzComponent', () => {
  let component: CreateLuzComponent;
  let fixture: ComponentFixture<CreateLuzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLuzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
