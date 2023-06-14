import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}

interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}

interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: JsonFormControlOptions;
  required: boolean;
  validators: JsonFormValidators;
}

export interface JsonFormData {
  controls: JsonFormControls[];
}

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonFormComponent implements OnInit {
  public jsonFormData = {
    "controls": [
      {
        "name": "firstName",
        "label": "First name:",
        "value": "",
        "type": "text",
        "validators": {
          "required": true,
          "minLength": 10
        }
      },
      {
        "name": "lastName",
        "label": "Last name:",
        "value": "",
        "type": "text",
        "validators": {}
      },
      {
        "name": "comments",
        "label": "Comments",
        "value": "",
        "type": "textarea",
        "validators": {}
      },
      {
        "name": "agreeTerms",
        "label": "This is a checkbox?",
        "value": "false",
        "type": "checkbox",
        "validators": {}
      },
      {
        "name": "size",
        "label": "",
        "value": "",
        "type": "range",
        "options": {
          "min": "0",
          "max": "100",
          "step": "1",
          "icon": "sunny"
        },
        "validators": {}
      },
      {
        "name": "lightDark",
        "label": "Do you like toggles?",
        "value": "false",
        "type": "toggle",
        "validators": {}
      }
    ]
  };

  public myForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit() {
    this.createForm(this.jsonFormData.controls as JsonFormControls[])
    console.log(Object.entries(this.jsonFormData.controls))
  }

  // take in form "controls" in json.
  // looping through all of the controls, from our data
  // and we're adding them to this form group.
  public createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      const validatorsToAdd = [];
      this.myForm.addControl(control.name, this.fb.control(''))

      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(value));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(value));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(value));
            break;
          case 'pattern':
            validatorsToAdd.push(Validators.pattern(value));
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }
      this.myForm.addControl(
        control.name,
        this.fb.control(control.value, validatorsToAdd)
      );
    }
  }

  public onSubmit() {
    console.log('Form valid: ', this.myForm.valid)
    console.log('Form values: ', this.myForm.value)
  }

}
