import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateplantComponent } from './donateplant.component';

describe('DonateplantComponent', () => {
  let component: DonateplantComponent;
  let fixture: ComponentFixture<DonateplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
