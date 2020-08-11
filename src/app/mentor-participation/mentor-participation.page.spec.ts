import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MentorParticipationPage } from './mentor-participation.page';

describe('MentorParticipationPage', () => {
  let component: MentorParticipationPage;
  let fixture: ComponentFixture<MentorParticipationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorParticipationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MentorParticipationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
