import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMenuComponent } from './single-menu.component';

describe('SingleMenuComponent', () => {
  let component: SingleMenuComponent;
  let fixture: ComponentFixture<SingleMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleMenuComponent]
    });
    fixture = TestBed.createComponent(SingleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
