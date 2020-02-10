import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RepositoryService} from './_services/repository.service';
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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
