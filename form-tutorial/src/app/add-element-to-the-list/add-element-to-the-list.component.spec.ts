import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElementToTheListComponent } from './add-element-to-the-list.component';

describe('AddElementToTheListComponent', () => {
  let component: AddElementToTheListComponent;
  let fixture: ComponentFixture<AddElementToTheListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddElementToTheListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddElementToTheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
