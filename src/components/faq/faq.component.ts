import {
  Component
} from '@angular/core';
import { Element } from "@angular/compiler";

export interface QuestionAndAnswer {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class faqComponent {
  public questionAndAnswers: QuestionAndAnswer[] = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
      open: false
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
      open: false
    },
    {
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
      open: true
    },
  ]

  public selectedIndex: number = 0;

  constructor() {
    this.getIndexOfOpenAnswer(this.questionAndAnswers)
  }

  public getIndexOfOpenAnswer(questionAndAnswers: QuestionAndAnswer[]) {
    for (let [index, questionAndAnswer] of Object.entries(questionAndAnswers)) {
      if (questionAndAnswer.open) {
        this.selectedIndex = parseInt(index);
      }
    }

    /* 오브젝트 인덱스 찾는 다른 방법 */
    console.log(questionAndAnswers.findIndex((questionAndAnswer) => questionAndAnswer.open))

  }


  public handleClick(index: number) {
    if (this.selectedIndex === index) {
      this.selectedIndex = -1
    } else {
      this.selectedIndex = index;
    }
  }

}
