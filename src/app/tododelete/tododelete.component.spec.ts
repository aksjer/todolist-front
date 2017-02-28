import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TododeleteComponent } from './tododelete.component';

describe('TododeleteComponent', () => {
  let component: TododeleteComponent;
  let fixture: ComponentFixture<TododeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TododeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TododeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
