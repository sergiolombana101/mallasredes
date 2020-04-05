import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GlobalPipesModule } from './pipes/global-pipes.module';

import { HeaderComponent } from './_layouts/header/header.component';
import { FooterComponent } from './_layouts/footer/footer.component';
import { NgxFoundationModule } from './shared/ngx-foundation.module';
import { DialogBodyComponent } from './shared/dialog-body/dialog-body.component';
import { MessageService } from './services/message.service';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLandingComponent } from './_layouts/home-landing/home-landing.component';
import { AboutMeScrollComponent } from './_layouts/about-me-scroll/about-me-scroll.component';
import { from } from 'rxjs';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { AboutMeInfoComponent } from './_layouts/about-me-info/about-me-info.component';
import { ChartsModule } from 'ng2-charts';
import { ProjectsComponent } from './_layouts/projects/projects.component';
import { HomeRoutingComponent } from './_layouts/home-routing/home-routing.component';
import { DocumentsComponent } from './_layouts/documents/documents.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DemoComponent,
    HomeComponent,
    DialogBodyComponent,
    HomeLandingComponent,
    AboutMeScrollComponent,
    AboutMeInfoComponent,
    ProjectsComponent,
    HomeRoutingComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GlobalPipesModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxFoundationModule,
    ChartsModule
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
