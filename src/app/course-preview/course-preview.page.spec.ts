import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursePreviewPage } from './course-preview.page';

describe('CoursePreviewPage', () => {
  let component: CoursePreviewPage;
  let fixture: ComponentFixture<CoursePreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursePreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
