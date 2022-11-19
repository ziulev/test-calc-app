import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputScreenComponent } from './containers/input-screen/input-screen.component';
import { ActionsScreenComponent } from './containers/actions-screen/actions-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    InputScreenComponent,
    ActionsScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
