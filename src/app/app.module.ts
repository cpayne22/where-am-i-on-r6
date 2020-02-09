import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { MapsComponent } from './maps/maps.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { KafeComponent } from './kafe/kafe.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    MapsComponent,
    FaqsComponent,
    ContactUsComponent,
    KafeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
