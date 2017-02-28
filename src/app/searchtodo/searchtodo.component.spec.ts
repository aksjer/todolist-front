import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtodoComponent } from './searchtodo.component';

describe('SearchtodoComponent', () => {
  let component: SearchtodoComponent;
  let fixture: ComponentFixture<SearchtodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchtodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
