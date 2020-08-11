import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MentorCertificatePage } from './mentor-certificate.page';

describe('MentorCertificatePage', () => {
  let component: MentorCertificatePage;
  let fixture: ComponentFixture<MentorCertificatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorCertificatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MentorCertificatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
