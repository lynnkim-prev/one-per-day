import { AppState } from "../app.state";
import { createSelector } from "@ngrx/store";
import { CoffeeState } from "./coffee.reducer";

export const selectCoffees = (state: AppState) => state.coffees;
export const selectAllCoffees = createSelector(
  selectCoffees,
  (state: CoffeeState) => state.coffees
);
