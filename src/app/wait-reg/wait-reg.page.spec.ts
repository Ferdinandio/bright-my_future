import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitRegPage } from './wait-reg.page';

describe('WaitRegPage', () => {
  let component: WaitRegPage;
  let fixture: ComponentFixture<WaitRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitRegPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
