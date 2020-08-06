import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearnMaterialPage } from './learn-material.page';

describe('LearnMaterialPage', () => {
  let component: LearnMaterialPage;
  let fixture: ComponentFixture<LearnMaterialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMaterialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
