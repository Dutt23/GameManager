import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateGameComponent } from './admin-create-game.component';

describe('AdminCreateGameComponent', () => {
  let component: AdminCreateGameComponent;
  let fixture: ComponentFixture<AdminCreateGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
