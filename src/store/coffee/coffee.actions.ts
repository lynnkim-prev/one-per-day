import {
  createAction,
  props
} from "@ngrx/store";
import { CoffeeItem } from "../../models/coffee.model";

export const loadCoffees = createAction('[Coffee] Load Coffees');

export const loadCoffeesSuccess = createAction(
  '[Coffee API] Coffee Load Success',
  props<{ coffees: CoffeeItem[] }>()
);

export const loadCoffeesFailure = createAction(
  '[Coffee API] Coffee Load Failure',
  props<{ error: string }>()
)
