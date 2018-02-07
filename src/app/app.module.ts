import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SignupService } from './components/email/signup.service';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SuccessComponent } from './components/success/success.component';
import { EmailValidatorDirective } from './shared/emailvalidator.directive';

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
    EmailValidatorDirective,
    SwiperComponent,
    HeaderComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    SwiperModule,
    HttpModule
  ],
  providers: [
    SignupService,{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
