import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AduanPerhatianListPage } from './aduan-perhatian-list.page';

describe('AduanPerhatianListPage', () => {
  let component: AduanPerhatianListPage;
  let fixture: ComponentFixture<AduanPerhatianListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AduanPerhatianListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AduanPerhatianListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
