import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { DataService } from "../../services/data.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.scss']
})
export class AlgorithmComponent implements OnInit, OnDestroy {

  /**
   * List of subscriptions to unsubscribe on destroy
   */
  protected subscriptions: Subscription[] = [];

  constructor(
    private dataService: DataService
  ) {
  }

  public ngOnInit() {
    this.algorithmPractice01()
    this.algorithmPractice02()
  }

  public algorithmPractice01(): void {
    /*
    Practice 1. Decode the following code:
    '   + -- + - + -   '
    '   + --- + - +   '
    '   + -- + - + -   '
    '   + - + - + - +   '
    + => (1) - =>0
    */
    // Expected result: ASCII glyph

    let textArr = ['   + -- + - + -   ', '   + --- + - +   ', '   + -- + - + -   ', '   + - + - + - +   '];

    let result = '';
    for (let text of textArr) {
      const decodedText = text.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0')
      const glyph = String.fromCharCode(parseInt(decodedText, 2))
      result += glyph;
    }
    console.log(result);
  }

  public algorithmPractice02(): void {
    this.subscriptions.push(
      this.dataService.getData('assets/json/dogs.json').subscribe((data) => {
        const dogs = data;
        // let durabilityOfRocks = [1, 2, 1, 4];
        let durabilityOfRocks = [5, 3, 4, 1, 3, 8, 3];

        let results = [];

        for (let dog of dogs) {
          let successFlag = true;
          let jumpedIndex = 0;
          while (jumpedIndex < durabilityOfRocks.length) {
            jumpedIndex += parseInt(dog.jump);
            durabilityOfRocks[jumpedIndex - 1] -= parseInt(dog.weight)

            if (durabilityOfRocks[jumpedIndex - 1] < 0) {
              successFlag = false;
              break;
            }
          }
          if (successFlag) {
            results.push(dog.name)
          }
        }
        console.log('results', results)
      }))
  }

  public ngOnDestroy() {
    // clean the subscriptions
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
