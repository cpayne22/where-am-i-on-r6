import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KafeComponent } from './kafe.component';

describe('KafeComponent', () => {
  let component: KafeComponent;
  let fixture: ComponentFixture<KafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
