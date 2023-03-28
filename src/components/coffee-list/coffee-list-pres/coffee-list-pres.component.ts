import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CoffeeItem } from "../../../models/coffee.model";

@Component({
  selector: 'app-coffee-list-pres',
  templateUrl: './coffee-list-pres.component.html',
  styleUrls: ['./coffee-list-pres.component.scss']
})
export class CoffeeListPresComponent implements OnChanges {

  /* Array of coffee items */
  @Input()
  public coffees!: CoffeeItem[];

  /* Number of keys in coffee item */
  public numberOfCoffeeKeys: number = 0;

  /* Detect input changes */
  public ngOnChanges(changes: SimpleChanges) {
    if (changes.coffees) {
      this.numberOfCoffeeKeys = Object.keys(this.coffees[0]).length;
    }
  }

  /* Initial page number */
  public page: number = 1;

  /* Count of items */
  public count: number = 0;

  /* Number of items to display */
  public tableSize: number = 10;

  /* Update page number on table number click */
  public onTableDataChange(event: any) {
    this.page = event;
  }
}
