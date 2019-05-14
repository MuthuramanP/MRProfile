import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ServiceareaComponent } from './servicearea/servicearea.component';
import { HistoryComponent } from './history/history.component';
import { WorkareaComponent } from './workarea/workarea.component';
import { AboutareaComponent } from './aboutarea/aboutarea.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { BrandsComponent } from './brands/brands.component';
import { MenuService } from './_service/menuservice';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    TestimonialComponent,
    ServiceareaComponent,
    HistoryComponent,
    WorkareaComponent,
    AboutareaComponent,
    BannerComponent,
    HeaderComponent,
    BrandsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
