import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {
  distinctUntilChanged,
  Subscription
} from "rxjs";

@Component({
  selector: 'app-poke-form',
  templateUrl: './poke-form.component.html',
  styleUrls: ['./poke-form.component.scss']
})
export class PokeFormComponent implements OnInit, OnDestroy {

  protected subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  public pokeForm!: FormGroup;

  public pokemonTypes = [
    {
      id: 1,
      type: 'water'
    },
    {
      id: 2,
      type: 'fire'
    },
    {
      id: 3,
      type: 'rock'
    }
  ]

  public ngOnInit() {
    this.pokeForm = this.formBuilder.group({
      name: ['Pikachu', [Validators.required]],
      country: ['Poke', [Validators.required]],
      favourite: ['Sushi', [Validators.required]],
      pokemonType: ['water', [Validators.required]]
    })

    this.pokeForm.get('pokemonType')!.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe((pokemonType) =>
      console.log('pokemonType: ', pokemonType)
    )
  }


//  inject formBuilder to constructor
//  implement OnInit
//  in ngOnInit() {}, build formGroup. and pass default value, and validator.

//  in template,
//  bind formGroup to form element
//  structure will be form > mat-form-field > label + input
//  and sumbit button. + (click)="submitPokeForm()"

  public submitPokeForm() {
    this.pokeForm.updateValueAndValidity();
  }

  public isInvalid(controlName: string): boolean {
    return this.pokeForm.get(controlName)!.hasError('required') &&
      (this.pokeForm.get(controlName)!.touched ||
        this.pokeForm.get(controlName)!.dirty)
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }
}
