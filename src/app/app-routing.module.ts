import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent  } from './contact-us/contact-us.component';
import { MapsComponent } from './maps/maps.component';
import { KafeComponent } from './kafe/kafe.component';


const routes: Routes = [
    { path: '', redirectTo: '/maps', pathMatch: 'full' },
    { path: 'maps', component: MapsComponent },
    { path: 'faqs', component: FaqsComponent },
    { path: 'contact-us', component: ContactUsComponent },

    { path: 'maps/kafe', component: KafeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
