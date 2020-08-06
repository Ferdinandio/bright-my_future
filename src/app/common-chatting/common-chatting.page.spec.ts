import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommonChattingPage } from './common-chatting.page';

describe('CommonChattingPage', () => {
  let component: CommonChattingPage;
  let fixture: ComponentFixture<CommonChattingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonChattingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonChattingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
