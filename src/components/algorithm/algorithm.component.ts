import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.scss']
})
export class AlgorithmComponent {

  constructor() {
    this.algorithmPractice01()
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

}
