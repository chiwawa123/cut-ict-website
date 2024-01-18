import { TechnicalComponent } from './pages/staff/technical/technical.component';
import { OperationsComponent } from './pages/staff/operations/operations.component';
import { SoftwareComponent } from './pages/staff/software/software.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { StaffComponent } from './pages/staff/staff.component';
import { DirectorComponent } from './pages/director/director.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { ServicesComponent } from './pages/services/services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'about/director',component:DirectorComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'downloads',component:DownloadsComponent
  },
  {
    path:'faqs',component:FaqsComponent
  },
  {
    path:'staff',component:StaffComponent
  },
  {
    path:'staff/software',component:SoftwareComponent
  },
  {
    path:'staff/operations',component:OperationsComponent
  },
  {
    path:'staff/technical',component:TechnicalComponent
  },
  {
    path:'**',redirectTo:'home', pathMatch: 'prefix'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
