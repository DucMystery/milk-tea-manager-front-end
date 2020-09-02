import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreListOfIdComponent } from './store-list-of-id.component';

describe('StoreListOfIdComponent', () => {
  let component: StoreListOfIdComponent;
  let fixture: ComponentFixture<StoreListOfIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreListOfIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreListOfIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
