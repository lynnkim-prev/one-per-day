import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListContComponent } from './coffee-list-cont.component';

describe('CoffeeListContComponent', () => {
  let component: CoffeeListContComponent;
  let fixture: ComponentFixture<CoffeeListContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeListContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
