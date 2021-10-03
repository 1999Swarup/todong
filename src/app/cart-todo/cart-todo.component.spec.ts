import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTodoComponent } from './cart-todo.component';

describe('CartTodoComponent', () => {
  let component: CartTodoComponent;
  let fixture: ComponentFixture<CartTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
