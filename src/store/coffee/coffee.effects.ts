import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import {
  Actions,
  createEffect,
  ofType
} from "@ngrx/effects";
import {
  loadCoffees,
  loadCoffeesFailure,
  loadCoffeesSuccess
} from "./coffee.actions";
import {
  catchError,
  from,
  map,
  of,
  switchMap,
  tap
} from "rxjs";
import { CoffeeService } from "../../services/coffee.service";
import { CoffeeItem } from "../../models/coffee.model";

@Injectable()
export class CoffeeEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private coffeeService: CoffeeService
  ) {
  }

  loadCoffees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCoffees),
      tap((x) => console.log('tab 1')),
      switchMap(() =>
        this.coffeeService.getCoffees().pipe(
          tap((x) => console.log('tab 2')),
          map((coffees) => loadCoffeesSuccess({ coffees: coffees })),
          catchError((error) => of(loadCoffeesFailure({ error })))
        )
      )
    )
  )
}
