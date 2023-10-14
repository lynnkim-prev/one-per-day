import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoffeeListContComponentModule } from "../components/coffee-list/coffee-list-cont/coffee-list-cont.component.module";
import { HttpClientModule } from "@angular/common/http";
import { JsonFormComponent } from '../components/json-form/json-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { PokeFormComponent } from "../components/poke-form/poke-form.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FaqComponentModule } from "../components/faq/faq.component.module";
import { MortgageCalculatorComponentModule } from "../components/mortgage-calculator/mortgage-calculator.component.module";
import { ModalOverlayComponentModule } from "../components/modal-overlay/modal-overlay.component.module";
import { CountdownTimerComponentModule } from "../components/countdown-timer/countdown-timer.component.module";
import { AlgorithmComponentModule } from "../components/algorithm/algorithm.component.module";

@NgModule({
  declarations: [
    AppComponent,
    JsonFormComponent,
    PokeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    CoffeeListContComponentModule,
    ReactiveFormsModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FaqComponentModule,
    MortgageCalculatorComponentModule,
    ModalOverlayComponentModule,
    CountdownTimerComponentModule,
    AlgorithmComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
