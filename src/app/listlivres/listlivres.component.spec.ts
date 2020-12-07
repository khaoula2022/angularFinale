import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlivresComponent } from './listlivres.component';

describe('ListlivresComponent', () => {
  let component: ListlivresComponent;
  let fixture: ComponentFixture<ListlivresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlivresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
