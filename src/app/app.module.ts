import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QualitySelectorComponent } from './quality-selector/quality-selector.component';
import { ImageComparerComponent } from './image-comparer/image-comparer.component';
import { DownloadBarComponent } from './download-bar/download-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    QualitySelectorComponent,
    ImageComparerComponent,
    DownloadBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
