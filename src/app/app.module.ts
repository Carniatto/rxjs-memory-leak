import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LuckyComponent } from './lucky/lucky.component';
import { MaterialModule } from './material.module';
import { ReallyComponent } from './really/really.component';

@NgModule({
  declarations: [AppComponent, LuckyComponent, ReallyComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
