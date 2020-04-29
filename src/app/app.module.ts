import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GlobalPipesModule } from './pipes/global-pipes.module';
import { NgxFoundationModule } from './shared/ngx-foundation.module';
import { DialogBodyComponent } from './shared/dialog-body/dialog-body.component';
import { MessageService } from './services/message.service';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

import { HomeLandingModule } from './components/home-landing/home-landing.module';
import { HomeRoutingModule } from './components/home-routing/home-routing.module';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NosotrosModule } from './components/nosotros/nosotros.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GlobalPipesModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxFoundationModule,
    HomeLandingModule,
    HomeRoutingModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogBodyComponent,
  ]
})
export class AppModule { }
