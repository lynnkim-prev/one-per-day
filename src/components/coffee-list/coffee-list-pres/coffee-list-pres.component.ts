import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-coffee-list-pres',
  templateUrl: './coffee-list-pres.component.html',
  styleUrls: ['./coffee-list-pres.component.scss']
})
export class CoffeeListPresComponent {

  @Input()
  public coffees: any = '';

}
