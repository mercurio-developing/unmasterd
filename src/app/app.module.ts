import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SapComponent } from './components/sap/sap.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EirComponent } from './components/eir/eir.component';
import { DbComponent } from './components/db/db.component';
import { BackDirective } from './shared/directives/back.directive';
import { HeaderBlackComponent } from './components/header-black/header-black.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmailsuccessComponent } from './components/emailsuccess/emailsuccess.component';
import { EmailValidatorDirective } from './shared/directives/emailvalidator.directive';
import { FooterComponent } from './components/footer/footer.component';
import { ChildProjectsComponent } from './components/projects/child-projects/child-projects.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'sap', component: SapComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'eir', component: EirComponent },
  { path: 'db', component: DbComponent },
  { path: 'emailsuccess', component: EmailsuccessComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    SapComponent,
    HeaderComponent,
    NavbarComponent,
    EirComponent,
    DbComponent,
    BackDirective,
    HeaderBlackComponent,
    NotFoundComponent,
    EmailsuccessComponent,
    EmailValidatorDirective,
    FooterComponent,
    ChildProjectsComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
