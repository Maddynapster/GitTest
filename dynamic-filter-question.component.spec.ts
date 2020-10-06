import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFilterQuestionComponent } from './dynamic-filter-question.component';

describe('DynamicFilterQuestionComponent', () => {
  let component: DynamicFilterQuestionComponent;
  let fixture: ComponentFixture<DynamicFilterQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFilterQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFilterQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
