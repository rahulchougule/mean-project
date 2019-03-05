import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalinfolisttempComponent } from './personalinfolisttemp.component';

describe('PersonalinfolisttempComponent', () => {
  let component: PersonalinfolisttempComponent;
  let fixture: ComponentFixture<PersonalinfolisttempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalinfolisttempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalinfolisttempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
