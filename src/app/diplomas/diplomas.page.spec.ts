import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiplomasPage } from './diplomas.page';

describe('DiplomasPage', () => {
  let component: DiplomasPage;
  let fixture: ComponentFixture<DiplomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiplomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
