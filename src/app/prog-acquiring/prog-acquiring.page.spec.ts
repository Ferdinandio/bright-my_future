import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgAcquiringPage } from './prog-acquiring.page';

describe('ProgAcquiringPage', () => {
  let component: ProgAcquiringPage;
  let fixture: ComponentFixture<ProgAcquiringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgAcquiringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgAcquiringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
