import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComparerComponent } from './image-comparer/image-comparer.component';
import { DownloadBarComponent } from './download-bar/download-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComparerComponent,
    DownloadBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
