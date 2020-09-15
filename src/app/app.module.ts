import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './public/landing/landing.component';
import { HeaderComponent } from './shared/header/header.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CopyrightComponent } from './shared/copyright/copyright.component';
import { ContainerPublicComponent } from './public/container-public/container-public.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    TopbarComponent,
    FooterComponent,
    CopyrightComponent,
    ContainerPublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
