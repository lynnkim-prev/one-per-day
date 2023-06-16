import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFormComponent } from './poke-form.component';

describe('PokeFormComponent', () => {
  let component: PokeFormComponent;
  let fixture: ComponentFixture<PokeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
