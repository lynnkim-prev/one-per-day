import {
  Component,
  OnInit
} from '@angular/core';
import { FormBuilder } from "@angular/forms";

export interface MortgageFormData {
  "name": string,
  "label": string,
  "type": string,
  "suffix": string,
  "value": number
}

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss']
})
export class MortgageCalculatorComponent implements OnInit {

  public mortgageFormData: MortgageFormData[] = [
    {
      "name": "principalLoanAmount",
      "label": "Principal Loan Amount",
      "type": "number",
      "suffix": "",
      "value": 500000
    },
    {
      "name": "interestRate",
      "label": "Interest Rate",
      "type": "number",
      "suffix": "%",
      "value": 3
    },
    {
      "name": "lengthOfLoan",
      "label": "Length of Loan",
      "type": "number",
      "suffix": "Years",
      "value": 30
    }
  ]

  public mortgageForm = this.fb.group({})

  public result!: number;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit() {
    for (let control of this.mortgageFormData) {
      this.mortgageForm.addControl(control.name, this.fb.control(control.value))
    }
  }

  public handleSubmit() {
    let { principalLoanAmount, interestRate, lengthOfLoan } = this.mortgageForm.value as any

    interestRate = interestRate / 100 / 12
    lengthOfLoan = lengthOfLoan * 12

    let numerator = interestRate * Math.pow(1 + interestRate, lengthOfLoan); // 분자
    let denominator = Math.pow(1 + interestRate, lengthOfLoan) - 1; // 분모

    this.result = Math.floor(principalLoanAmount * (numerator / denominator));
  }

}
