import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { ServicesComponent } from './pages/services/services.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectorComponent } from './pages/director/director.component';
import { StaffComponent } from './pages/staff/staff.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SoftwareComponent } from './pages/staff/software/software.component';
import { OperationsComponent } from './pages/staff/operations/operations.component';
import { TechnicalComponent } from './pages/staff/technical/technical.component';
import { ServiceStatusComponent } from './components/service-status/service-status.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    BreadCrumbComponent,
    ServicesComponent,
    FaqsComponent,
    DirectorComponent,
    StaffComponent,
    DownloadsComponent,
    SoftwareComponent,
    OperationsComponent,
    TechnicalComponent,
    ServiceStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
