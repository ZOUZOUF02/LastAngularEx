import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StInfoComponent } from './st-info.component';

describe('StInfoComponent', () => {
  let component: StInfoComponent;
  let fixture: ComponentFixture<StInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
