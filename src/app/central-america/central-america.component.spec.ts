import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralAmericaComponent } from './central-america.component';

describe('CentralAmericaComponent', () => {
  let component: CentralAmericaComponent;
  let fixture: ComponentFixture<CentralAmericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralAmericaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
