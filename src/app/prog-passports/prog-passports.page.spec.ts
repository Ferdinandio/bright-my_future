import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgPassportsPage } from './prog-passports.page';

describe('ProgPassportsPage', () => {
  let component: ProgPassportsPage;
  let fixture: ComponentFixture<ProgPassportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgPassportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgPassportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
