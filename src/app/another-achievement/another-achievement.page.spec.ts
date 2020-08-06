import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnotherAchievementPage } from './another-achievement.page';

describe('AnotherAchievementPage', () => {
  let component: AnotherAchievementPage;
  let fixture: ComponentFixture<AnotherAchievementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherAchievementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnotherAchievementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
