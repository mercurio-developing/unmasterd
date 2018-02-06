import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SuccessComponent } from './components/success/success.component';
import { EmailvalidatorDirective } from './shared/emailvalidator.directive';

//NGX SWIPER

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SwiperComponent } from './components/swiper/swiper.component';
import { HeaderComponent } from './components/header/header.component';
import { EmailComponent } from './components/email/email.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    SuccessComponent,
    EmailvalidatorDirective,
    SwiperComponent,
    HeaderComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    SwiperModule
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
