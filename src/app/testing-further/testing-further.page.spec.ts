import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestingFurtherPage } from './testing-further.page';

describe('TestingFurtherPage', () => {
  let component: TestingFurtherPage;
  let fixture: ComponentFixture<TestingFurtherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingFurtherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestingFurtherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
