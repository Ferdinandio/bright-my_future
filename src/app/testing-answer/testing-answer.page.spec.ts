import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestingAnswerPage } from './testing-answer.page';

describe('TestingAnswerPage', () => {
  let component: TestingAnswerPage;
  let fixture: ComponentFixture<TestingAnswerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingAnswerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestingAnswerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
