import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { HeaderComponent } from './header/header.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';  


@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
