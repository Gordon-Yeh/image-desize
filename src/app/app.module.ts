import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComparerComponent } from './image-comparer/image-comparer.component';
import { PercentWithSignPipe } from './pipes/percent-with-sign.pipe';
import { BytesPipe } from './pipes/bytes.pipe';
import { GalleryComponent } from './gallery/gallery.component';
import { SafePipe } from './pipes/safe.pipe';
import { AboutComponent } from './about/about.component';
import { PanningCanvasComponent } from './panning-canvas/panning-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComparerComponent,
    PercentWithSignPipe,
    BytesPipe,
    GalleryComponent,
    SafePipe,
    AboutComponent,
    PanningCanvasComponent
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
