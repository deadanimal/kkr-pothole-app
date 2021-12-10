import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AduanSelesaiListPage } from './aduan-selesai-list.page';

describe('AduanSelesaiListPage', () => {
  let component: AduanSelesaiListPage;
  let fixture: ComponentFixture<AduanSelesaiListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AduanSelesaiListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AduanSelesaiListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
