import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestarComponent } from './restar.component';

describe('RestarComponent', () => {
  let component: RestarComponent;
  let fixture: ComponentFixture<RestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
