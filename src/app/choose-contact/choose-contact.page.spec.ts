import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseContactPage } from './choose-contact.page';

describe('ChooseContactPage', () => {
  let component: ChooseContactPage;
  let fixture: ComponentFixture<ChooseContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
