import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSavedCatsComponent } from './user-saved-cats.component';

describe('UserSavedCatsComponent', () => {
  let component: UserSavedCatsComponent;
  let fixture: ComponentFixture<UserSavedCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSavedCatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSavedCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
