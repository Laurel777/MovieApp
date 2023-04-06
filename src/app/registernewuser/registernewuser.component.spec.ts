import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisternewuserComponent } from './registernewuser.component';

describe('RegisternewuserComponent', () => {
  let component: RegisternewuserComponent;
  let fixture: ComponentFixture<RegisternewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisternewuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisternewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
