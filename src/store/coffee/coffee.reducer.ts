import { CoffeeItem } from "../../models/coffee.model";
import {
  createReducer,
  on
} from "@ngrx/store";
import {
  loadCoffees,
  loadCoffeesFailure,
  loadCoffeesSuccess
} from "./coffee.actions";

export interface CoffeeState {
  coffees: CoffeeItem[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: CoffeeState = {
  coffees: [],
  error: null,
  status: 'pending'
}

export const coffeeReducer = createReducer(
  initialState,
  on(loadCoffees, (state) => ({ ...state, status: 'loading' })),
  on(loadCoffeesSuccess, (state, { coffees }) => ({
    ...state,
    coffees: coffees,
    error: null,
    status: 'success'
  })),
  on(loadCoffeesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error'
  }))
)
