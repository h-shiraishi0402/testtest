import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitpageComponent } from './recruitpage.component';

describe('RecruitpageComponent', () => {
  let component: RecruitpageComponent;
  let fixture: ComponentFixture<RecruitpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
