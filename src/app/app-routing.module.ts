import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutareaComponent } from './aboutarea/aboutarea.component';
import { ServiceareaComponent } from './servicearea/servicearea.component';
import { WorkareaComponent } from './workarea/workarea.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'muthu', component: HomeComponent},
  { path:'about', component: AboutareaComponent},
  { path:'service', component: ServiceareaComponent},
  { path:'work', component: WorkareaComponent},
  { path:'contact', component: ContactComponent},
  { path:'experience', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
