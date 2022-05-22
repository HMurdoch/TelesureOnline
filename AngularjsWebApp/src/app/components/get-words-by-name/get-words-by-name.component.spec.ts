import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWordsByNameComponent } from './get-words-by-name.component';

describe('GetWordsByNameComponent', () => {
  let component: GetWordsByNameComponent;
  let fixture: ComponentFixture<GetWordsByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWordsByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWordsByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
