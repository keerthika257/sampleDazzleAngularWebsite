import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { DownloadComponent } from './download/download.component';


const routes: Routes = [

{ path: 'home', component : HomeComponent},
{ path: 'about', component : AboutComponent},
{ path: 'pricing', component : PricingComponent},
{ path: 'testimonials', component : TestimonialsComponent},
{ path: 'download', component : DownloadComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
