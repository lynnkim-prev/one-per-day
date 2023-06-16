import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CoffeeItem } from "../models/coffee.model";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class CoffeeService {

  constructor(private http: HttpClient) {
  }

  public getCoffees(): Observable<CoffeeItem[]> {
    return this.http.get<CoffeeItem[]>('https://random-data-api.com/api/coffee/random_coffee?size=50');
  }
}
