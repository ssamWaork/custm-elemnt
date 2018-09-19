import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { SgnewsletterComponent } from './sgnewsletter/sgnewsletter.component';
import { ReactiveFormsModule} from '@angular/forms';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [
    SgnewsletterComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [SgnewsletterComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const subscriber = createCustomElement(SgnewsletterComponent, {
      injector
    });
    customElements.define('app-sgnewsletter', subscriber);
  }

  ngDoBootstrap() {}
}
