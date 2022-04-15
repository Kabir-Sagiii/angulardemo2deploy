import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCompComponent } from './pcomp.component';

describe('PCompComponent', () => {
  let component: PCompComponent;
  let fixture: ComponentFixture<PCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
