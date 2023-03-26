import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListPresComponent } from './coffee-list-pres.component';

describe('CoffeeListPresComponent', () => {
  let component: CoffeeListPresComponent;
  let fixture: ComponentFixture<CoffeeListPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListPresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeListPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
