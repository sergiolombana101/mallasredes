import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GlobalPipesModule } from './pipes/global-pipes.module';
import { NgxFoundationModule } from './shared/ngx-foundation.module';
import { DialogBodyComponent } from './shared/dialog-body/dialog-body.component';
import { MessageService } from './services/message.service';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

import { HomeLandingModule } from './components/home-landing/home-landing.module';

@NgModule({
  declarations: [
    AppComponent,
    DialogBodyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GlobalPipesModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxFoundationModule,
    HomeLandingModule
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
