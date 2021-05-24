import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GitHubComponent,
    AboutComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
